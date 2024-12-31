import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import { connectDb } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";

import bodyParser from "body-parser";

import User from "./models/user.model.js";

const app = express();
connectDb();

app.use(bodyParser.json());
// Enable CORS for all domains
app.use(cors());

// the || is port or 3000
const port = process.env.PORT || 3000;

// using the auth routes
app.use("/api/v1/auth", authRoutes);

// API endpoint to fetch users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch users from MongoDB
    res.json(users); // Send users as response
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
