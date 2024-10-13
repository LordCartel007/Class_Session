// encapsulation
// encapsulation is the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.

class Person {
  constructor(name, complexion, height, weight) {
    this.name = name;
    this.complexion = complexion;
    this.height = height;
    this.weight = weight;
  }
  makeNoise() {
    console.log("I am a person");
  }
  addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
}

const student1 = new Person("Bruce Wayne", "Fair", "6.2", "80kg");

const student2 = new Person("Clark Kent", "Fair", "6.2", "75kg");

student1.makeNoise();
console.log(student1.addTwoNumbers(2, 3));

console.log(student1);

// inheritance
// inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object.

class Animal {
  constructor(name, color) {
    this.name = name;
    this.name = color;
  }
}

class Dog extends Animal {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
}

// Polymorphism
// Polymorphism is the ability to present the same interface for different data types.
class Student extends Person {
  makeNoise() {
    console.log("I am a student");
  }
}

const newStudent = new Student("Peter Parker", "Fair", "6.2", "70kg");

console.log(newStudent);

newStudent.makeNoise();

// abstraction
class customDateClass extends Date {
  constructor() {
    super();
  }
  getDate() {
    console.log("I HAVE OVERRIDDEN THE GET DATE METHOD");
  }
}

const newDate = new customDateClass();

newDate.getDate();

newDate.getDay();
