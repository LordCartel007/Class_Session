import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDb } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";

import bodyParser from "body-parser";

const app = express();
connectDb();

app.use(bodyParser.json());

// the || is port or 3000
const port = process.env.PORT || 3000;

// using the auth routes
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
