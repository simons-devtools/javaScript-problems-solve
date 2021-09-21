// Create the new object with class: (js)
class Person {
    // Parent class
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating!`);
    }
  }
  
  class Cricketer extends Person {
    // Child class
    constructor(name, age, type, country) {
      super(name, age);
      this.name = name;
      this.age = age;
      this.type = type;
      this.country = country;
    }
  
    play() {
      console.log(`${this.name} is playing!`);
    }
  }
  
  const tamim = new Cricketer("Tamim Ahmed", 35, "All rounder", "Bangladesh");  
  console.log(tamim.eat());
  