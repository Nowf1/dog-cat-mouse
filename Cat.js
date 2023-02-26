function meows() {
  this.stomach = [];
  this.dead = false;
}

Cat.proptotype.eat = function (mouse) {
  this.stomach.push();
};
Cat.proptotype.die = function () {
  this.dead = true;
};
module.exports = Cat;
