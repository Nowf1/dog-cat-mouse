function Dog() {
  this.stomach = [];
}

function testDog() {}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};
