(function () {
  // Optional code that runs immediately
  console.log('Page is working');
})();

class Player {
  constructor(level, health, weapon, coords, xp) {
    this.level = level;
    this.health = health;
    this.weapon = weapon;
    this.coords = coords;
    this.xp = xp;
  }
}

class Enemy {
  constructor(health, coords, damage) {
    this.health = health;
    this.coords = coords;
    this.damage = damage;
  }
}

class Game {
  constructor() {
    this.map = [];
    this.enemies = [];
    this.canvas = null;
    this.context = null;
  }
}

Game.prototype.reset = function () {
  this.enemies = [];
  this.map = [];
};

let POINTS_PER_LEVEL = 100;
let COLS = 80;
let ROWS = 60;
const TILE_DIM = 10;

const WALL_CODE = 0;
const FLOOR_CODE = 1;
const PLAYER_CODE = 2;
const ENEMY_CODE = 3;
const POTION_CODE = 4;
const WEAPON_CODE = 5;

const TILE_COLORS = [
  // wall
  'grey',

  // floor
  'white',

  // player
  'blue',

  // enemy
  'red',

  // health potion
  'green',

  // weapon
  'orange',
];

let TOTAL_ENEMIES = 10;
let STARTING_POTIONS_AMOUNT = 4;
let STARTING_WEAPONS_AMOUNT = 3;

// possible health that enemies can have
let ENEMIES_HEALTH = [30, 30, 30, 30, 40, 40, 60, 80];

// possible damage that enemies can inflict
let ENEMIES_DAMAGE = [30, 30, 30, 30, 40, 40, 60, 80];

// possible health amounts a potion can recover
let POTIONS = [10, 20, 30, 40, 50];

let WEAPONS = [
  {
    name: 'Dagger',
    damage: 15,
  },
  {
    name: 'Sword',
    damage: 30,
  },
  {
    name: 'Hammer',
    damage: 60,
  },
  {
    name: 'Axe',
    damage: 100,
  },
];

let addStat = function (label, container) {
  let el = document.createElement('li');
  let id = label.toLowerCase();
  let value = '0';
  el.innerHTML = `<label>${label}</label>: <span id="${id}" ${value}></span>`;
  container.appendChild(el);
  return container;
};

let createDOM = function () {
  let container = document.getElementById('container');
  let hud = document.createElement('ul');
  hud.id = 'hud';

  let labels = ['XP', 'Level', 'Health', 'Weapon', 'Damage', 'Enemies'];

  for (let label of labels) {
    hud = addStat(label, hud);
  }

  container.appendChild(hud);

  let canvas = document.createElement('canvas');
  canvas.id = 'grid';

  canvas.height = ROWS * TILE_DIM;
  canvas.width = COLS * TILE_DIM;

  container.appendChild(canvas);
};

let game = null;
let player = null;

let startGame = function () {
  generateMap();

  setTimeout(gameSetUp, 1000);

  function gameSetUp() {
    drawMap(0, 0, COLS, ROWS);
  }
};

let generateMap = function () {
  console.log('generate map');
  for (let row = 0; row < ROWS; row++) {
    game.map.push([]);
    for (let col = 0; col < COLS; col++) {
      game.map[row].push(WALL_CODE);
    }
  }

  let pos = { x: COLS / 2, y: ROWS / 2 };
  const ATTEMPTS = 30000;
  const MINIMUM_TILE_COUNT = 1000;
  const MAX_PENALTIES_COUNT = 1000;
  const OUTER_LIMIT = 3;
  const randomDirection = function () {
    return Math.random() <= 0.5 ? -1 : 1;
  };
  let tiles = 0,
    penalties = 0;

  for (let i = 0; i < ATTEMPTS; i++) {
    let axis = Math.random() <= 0.5 ? 'x' : 'y';

    let numCells = axis == 'x' ? COLS : ROWS;

    while (pos[axis] < OUTER_LIMIT || pos[axis] >= numCells - OUTER_LIMIT) {
      pos[axis] += randomDirection();

      penalties++;

      if (penalties > MAX_PENALTIES_COUNT) {
        if (tiles >= MINIMUM_TILE_COUNT) {
          return;
        }
        pos.x = COLS / 2;
        pos.y = ROWS / 2;
      }
    }

    pos[axis] += randomDirection();

    let { x, y } = pos;

    if (game.map[y][x] != FLOOR_CODE) {
      game.map[y][x] = FLOOR_CODE;

      tiles++;
    }
    penalties = 0;
  }
};

let drawObjects = function (x, y, color) {
  game.context.beginPath();
  game.context.rect(x * TILE_DIM, y * TILE_DIM, TILE_DIM, TILE_DIM);
  game.context.fillStyle = color;
  game.context.fill();
};

let drawMap = function (startX, startY, endX, endY) {
  let colors = [
    // wall
    'grey',
    // floor
    'white',
    // player
    'blue',
    // enemy
    'red',
    // potion (aka health drop)
    'green',
    // weapon
    'orange',
  ];

  for (let row = startY; row < endY; row++) {
    for (let col = startX; col < endX; col++) {
      let c_idx = game.map[row][col];

      let color = colors[c_idx];

      drawObjects(col, row, color);
    }
  }
};

let init = function () {
  createDOM();
  game = new Game();
  game.canvas = document.getElementById('grid');
  game.context = game.canvas.getContext('2d');

  startGame();
};

init();
