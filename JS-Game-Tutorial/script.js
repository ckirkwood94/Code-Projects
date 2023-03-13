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
