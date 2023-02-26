function Dog(name) {
  this.stomach = [];
  this.name = name;
}

function testDog() {}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};

module.exports = Dog;
