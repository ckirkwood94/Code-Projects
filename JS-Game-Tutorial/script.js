(function () {
  // Optional code that runs immediately
  console.log('Hello World');
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
