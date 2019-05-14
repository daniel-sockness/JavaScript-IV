/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
*/

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
  this.name = options.name;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(characterStatsOptions) {
  GameObject.call(this, characterStatsOptions);
  this.healthPoints = characterStatsOptions.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

function Humanoid(humanoidOptions) {
  CharacterStats.call(this, humanoidOptions);
  this.team = humanoidOptions.team;
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.name = attributes.name;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extendes GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = characterStatsOptions.healthPoints;
  }
}

class Humanoid extendes CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
