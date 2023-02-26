function Cat() {
  this.stomach = [];
}

Cat.proptotype.eat = function (mouse) {
  this.stomach.push(mouse);
};
module.exports = Cat;
