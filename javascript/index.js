//Print Hello world
// console.log("Hello World");
// alert
// alert("welcome to javascript");
// prompt
// var visitorName = prompt("what your name");

// console.log(visitorName);
// var student1 = "sunny";
// console.log(student1);

// var num1 = 25;
// console.log(num1 * 4);
// let venue = "alakija";
// venue = "iyana oba";
// console.log(venue);

// var num1 = 5;
//string concatenation

// var sentence = "I" + "" + "am" + "" + "a" + "" + "boy";
// var sentence2 = "I am a boy";
// console.log(student1 + " live in " + venue);
// Defining a function
// function ringTheBell(timeToRingBell) {
//   console.log("i just rang the bell now " + timeToRingBell);
// }
// ringTheBell("12am");
// ringTheBell("11am");
// ringTheBell("1pm");
// ringTheBell("2pm");
// ringTheBell("3pm");

// function callName(callName) {
//   console.log("nameToCall "+ );
// }
// callName("sunday");

// function callName(name1, name2) {
//   console.log(name1);
//   console.log(name2);
// }
// callName("sunday", "cartel");

// function sumNumber(num1, num2, num3) {
//   var result = num1 + num2;
//   console.log(result);
// }
// sumNumber(4, 8);

// function areaTriangle(b, h) {
//   var result = 0.5 * b * h;
//   console.log(result);
// }
// areaTriangle(5, 15);

// function crease(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }
// crease(10000, 100000);

// function sumNumber(x, y, z) {
//   var additionResult = x + y + z;
//   return additionResult;
// }

// var gabriel = sumNumber(5, 6, 7);
// console.log(gabriel * 5);

//function to calculate peremeter of a rectangle and return the result
//Hint: perimeter = 2(l + b)

// function perimeter(l, b) {
//   var equals = 2 * (l + b);
//   return equals;
// }
// var get = perimeter(5, 4);
// console.log(get);

// function countSentence(sentence) {
//   var equals = sentence.length;
//   return equals;
// }
// var get = countSentence("i love to eat");
// console.log(get);

// function hourToSecond(time) {
//   var duration = 60 * 60 * time;
//   return duration;
// }
// var hour = hourToSecond(5);
// console.log(hour);

// function calAge(age) {
//   var ageInDays = age * 365;
//   return ageInDays;
// }
// console.log(calAge(10));

// function circuitPower(voltage, current) {
//   var power = voltage * current;
//   return power;
// }
// console.log(circuitPower(20, 5));

// function remainder(x, y) {
//   var remainderValue = x % y;
//   return remainderValue;
// }
// console.log(remainder(10, 7));

//If Else Statements

// var x;
// console.log(Boolean(x));
// var x = 5;
// var y = "5";
// console.log(x != y);

// console.log(null === true);

// var x = 1;
// var y = 0;
// var z = null;
// console.log(x && y);
// console.log(z && y);
// console.log(z || x);
// console.log(y || z);

// console.log(!!NaN == undefined && 6 >= !!infinite);

// var name = "lucy";
// console.log(`yo, ${name}`);

// var caps = function (name) {
//   var show = name.toUpperCase();
//   return show;
// };
// console.log(caps("sunday"));

// function greet(name) {
//   return `Hello ${name.toUpperCase()}`;
// }
// console.log(greet("sunny"));

//IF ELSE IF
// var dayOfWeek = "monday";
// if (dayOfWeek === "monday") {
//   console.log("today is monday");
// } else if (dayOfWeek === "tuesday") {
//   console.log("today is tuesday");
// } else {
//   console.log("today is a fun day");
// }

// function checkNumber(num) {
//   if (num % 2 === 0) {
//     return num + " Is even number";
//   } else {
//     return num + " is an odd number";
//   }
// }
// console.log(checkNumber(5));
// write a function that take a sentence and check if the sentence is long or short

// function sentenceLen(sentence) {
//   if (sentence.length > 10) {
//     return "This sentence is greater than 10";
//   } else {
//     return "This sentence is less than 10";
//   }
// }
// console.log(sentenceLen("i love "));

// ARRAY

// var class02 = ["cartel", "sunday", "law", "gabriel"];
// console.log(class02[3]);

// LOOP
//WHILE LOOPS

// let count = 0;
// while (count < 10) {
//   console.log("hello Everyone ", count);
//   count += 1;
// }

// let balance = 20;
// while (balance >= 5) {
//   console.log(balance + " debt alert");

//   if (balance === 5) {
//     console.log(" you are low on cash " + balance);
//   }
//   balance -= 1;
// }

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// let index = 0;
var students = ["chidimma", "lookman", "solomon", "tinubu", "ikenna"];
// while (index < students.length)
//   console.log(students[index]);
//   index++;

// FOR LOOPS

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// var debt = 500;
// function decrease(amount) {
//   if (debt > amount) {
//     var minus = debt - amount;
//     console.log("your new balance is " + minus);
//   } else if (amount > debt) {
//     console.log("you have an insuffient balance");
//   }
// }
// decrease(550);

// var credit = 500;
// function increase(amount) {
//   var add = credit + amount;
//   console.log("your new balance is " + add);
// }
// increase(550);

// const adam = {
//   name: "adam",
//   age: 18,
//   wasExpelledFromHeaven: true,
//   greet: function () {
//     "Hi, my name is " + adam;
//   },
// };

// console.log(adam);

// function circuitPower(voltage, current) {
//   power = voltage * current;
//   return power;
// }
// console.log(circuitPower(10, 20));

// function howManySeconds(hours) {
//   convert = 60 * 60 * hours;
//   return convert;
// }
// console.log(howManySeconds(2));

// function remainder(num1, num2) {
//   calc = num1 % num2;
//   return calc;
// }
// console.log(remainder(9, 5));

// function cube(a) {
//   return a ** 3;
// }
// console.log(cube(5));

// function minuteSeconds(mins) {
//   return (convert = 60 * mins);
// }
// console.log(minuteSeconds(5));

// function whichIsLarger(f, g) {
//   if (f > g) {
//     return "f";
//   } else if (f === g) {
//     return "neither";
//   } else if (f < g) {
//     return "g";
//   }
// }
// console.log(whichIsLarger(5, 10));

// function whichIsLarger(f, g) {
// if (f() > g()) {
//   return "f";
// } else if (f() === g()) {
//   return "neither";
// } else {
//   return "g";
// }
// }
// console.log(whichIsLarger(5, 10));

// function matchHouses(step) {
//   stick = 6;
//   if (step === 1) return (level = step * stick);
//   else {
//     level = step * stick;
//     return 1 - step + level;
//   }
// }

// console.log(matchHouses(87));

// function matchHouses(step) {
//   if (step === 0) return 0; // No houses, no matchsticks needed.
//   return 6 + (step - 1) * 5;
// }
// console.log(matchHouses())

// let sizes = ["fat", "fat", "fat", "slim", "fat"];
// let fatCount = 0;
// i = 0;
// for (let i = 0; i < sizes.length; i++) {
//   if (sizes[i] === "fat") {
//     fatCount++;
//   }
// }
// console.log("The nnumber of fat people are: " + fatCount);

// function sevenBoom(arr) {
//   count7 = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//       count7++;
//       return "Boom!";
//     } else {
//       return "there is no 7 in the array";
//     }
//   }
// }
// console.log;
// sevenBoom([1, 2, 3, 4, 5, 6, 7]);

// function sevenBoom(arr) {
//   let count7 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//       count7++;
//       return "Boom!";
//     }
//   }
//   return "there is no 7 in the array";
// }

// console.log(sevenBoom([2, 55, 60, 97, 86]));

// function sevenBoom(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].toString().includes('7')) {
//         return "Boom!";
//       }
//     }
//     return "there is no 7 in the array";
//   }

//   console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
//   console.log(sevenBoom([8, 6, 33, 100]));       // "there is no 7 in the array"
//   console.log(sevenBoom([2, 55, 60, 97, 86]));

// function addup(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(addup(600));

// function powerOfTwo(num1, num2) {
//   power = num1 * 2 ** num2;
//   return power;
// }
// console.log(powerOfTwo(10, 3));

// OTP
function generateOTP() {
  // Generate a random number between 100000 and 999999
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString(); // Convert the number to a string and return
}
const otp = generateOTP();
console.log(`Your OTP is: ${otp}`);
