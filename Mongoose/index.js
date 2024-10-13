import dotenv from "dotenv";
dotenv.config();
import express from "express";
// importing mongoose
import mongoose from "mongoose";

// import User from "./models/user.model.js";

import product from "./models/Product.model.js";

const app = express();
// THE .THEN HANDLES THE SUCCESS CASE (promises )
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log(`database connected @ ${result.connection.host}`);
  })
  .catch((error) => {
    console.log(`error connecting to database: ${error.message}`);
  });

// create new user using the .save method

// const newUser = new User({
//   fullname: "Gabriel Akinola",
//   email: "gabriel@gmail.com",
//   password: "wordpass",
//   gender: "male",
//   interests: ["coding", "reading", "sports"],
// });

// const newUser2 = new User({
//   fullname: "Lord Cartel",
//   email: "cartel@gmail.com",
//   password: "wordpass",
//   gender: "male",
//   interests: ["gaming", "sky diving", "nuclear operations"],
// });

// newUser
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`error saving users: ${error.message}`);
//   });

// newUser2
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`error saving users: ${error.message}`);
//   });

// using the .create method to create a new user
// User.create({
//   fullname: "Zeus",
//   email: "Zeus@gmail.com",
//   password: "wordpass",
//   gender: "male",
//   interests: ["gaming", "sky diving", "nuclear operations"],
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`error saving users: ${error.message}`);
//   });

// product
//   .create({
//     productName: "Bugatti",
//     price: 5000000,
//     quantity: 1,
//     availability: "In Stock",
//     description: " Why wake up at home when you can wake up in a new Bugatti",
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`error saving users: ${error.message}`);
//   });

// product
//   .create([
//     {
//       productName: "Lamborgini",
//       price: 2000000,
//       quantity: 1,
//       availability: "In Stock",
//       description: " Get a new lambor and feel rich",
//     },
//     {
//       productName: "Ferrari",
//       price: 2000000,
//       quantity: 1,
//       availability: "In Stock",
//       description:
//         " Be driving ferrari and driving buggati while feeling authentic",
//     },
//     {
//       productName: "rolls royce",
//       price: 7000000,
//       quantity: 1,
//       availability: "In Stock",
//       description:
//         " I bet you just want to roll it roll it roll it ,in your rolls royce",
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`error saving users: ${error.message}`);
//   });

// // finding a user with a specific id
// product
//   .findById("66fabf58891e177fe7e72379")
//   .then((result) => {
//     console.log("the user with that id:", result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// finding a user with a specific id and removing the user

product
  .findByIdAndDelete("66fabf58891e177fe7e72379")
  .then((result) => {
    if (!result) {
      return console.log("Person not found");
    }
    console.log("Person removed:", result);
  })
  .catch((error) => {
    console.log(`Error removing person: ${error.message}`);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
