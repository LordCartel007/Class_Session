import { Router } from "express";
import { createUser } from "../controller/auth.controllers.js";
const router = Router();

// create user is a function that is     called when a post request is made to the /create-user endpoint
router.post("/create-user", createUser);

export default router;
