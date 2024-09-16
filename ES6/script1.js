// importing from modules
import { myArray, triangleArea } from "./script2.js";

// DEFAULT IMPORT
// you can use any name to call your import using default import
import areaOfCircle from "./script3.js";

// Variable declaration
const amount = 25;
const buyer = "Gerald";
const item = "Garri";
// Template literals
const sentES5 = buyer + " bought " + item + " for " + "$" + amount;

const sentES6 = `${buyer} bought ${item} for $${amount}`;

// Tenary operators
if (amount < 20) {
  console.log("product is cheap");
} else {
  console.log("product is expensive");
}

amount > 20
  ? console.log("product is cheap")
  : console.log("product is expensive");

//   functions
function sumNumES5(a, b) {
  return a + b;
}

const sumNumES6 = (a, b) => {
  return a + b;
};

console.log(triangleArea(10, 10));
console.log(myArray[1]);

console.log(areaOfCircle(10));

// with es5 structure
const car = {
  Name: "lambo",
  price: "$200",
  color: "red",
  year: 2023,
  model: "LMB23bh",
};

const person = {
  personName: "Gabriel",
  className: 2,
  height: 1.6,
  complexion: "dark",
};

// DESTRUCTURING
// we have destructure personname and classname the rest stays in others .
const { personName, className, ...others } = person;

console.log(others);

// const name = car.name;
// const price = car.price;
// const color = car.color;
// const year = car.year;
// const  model = car.model;

// doing it with es6 destructuring
const { name, color, year, model, price } = car;

console.log(
  `${name} with model no ${model} is a car manufactured in ${year}.
     The ${color} is the most purchased one sold for ${price} each`
);

const [food1, food2, food3] = ["garri", "amala", "semo"];

console.log(food1);

// combined array together
let array1 = [1, 5, 7];
let array2 = [10, 20, 30];

array1 = [...array1, ...array2];
console.log(array1);

const combinedObj = { ...car, ...person };

console.log(combinedObj);

// RECURSION
// 5! = 5*4*3*2*1
// ON THE RECURSION THE FUNCTION RECALLS ITSELF

function calculteFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculteFactorial(num - 1);
}

console.log(calculteFactorial(4));
