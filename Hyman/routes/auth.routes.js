import { Router } from "express";
import {
  createUser,
  getUserProfile,
  loginUser,
  verifyEmail,
} from "../controller/auth.controllers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

// create user is a function that is     called when a post request is made to the /create-user endpoint
router.post("/create-user", createUser);
router.post("/verify-email", verifyEmail);
router.post("/login-user", loginUser);
router.get("/protected-route", authenticateUser, getUserProfile);

export default router;
