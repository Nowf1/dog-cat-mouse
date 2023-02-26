var chalk = require("chalk");

function Dog(name) {
  this.stomach = [];
  this.name = name;
}

function testDog() {}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};

Dog.prototype.sayHi = function () {
  console.log("Hiiiii" + chalk.blue(this.name));
};
module.exports = Dog;
