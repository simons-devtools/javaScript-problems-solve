// Create the new object with func: (js)
function Person(name, age) {
  // Parent class
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  // Child class
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating!`);
  },
  play: function () {
    console.log(`${this.name} is playing!`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

const tamim = new Cricketer("Tamim Ahmed", 35, "Baller", "Bangladesh");
console.log(tamim);
