import User from "../models/user.model.js";
// the hashing password packgae bcrypt
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "../utils/nodemailer.util.js";
import { generateEmailVerificationToken } from "../utils/token.js";

const createUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  //   To check if all feild are filled
  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //   To check if the password and confirmPassword are the same
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  //   check if user exists from the database
  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ message: "User already exists. please login" });
  }

  // create new user
  // hash user password before creating data base

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    // Generate OTP and send verification email
    await sendVerificationEmail(newUser);

    // Generate email verification token and send to cilent
    const userPayload = {
      id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      isVerified: newUser.isVerified,
    };
    const emailVerifyToken = generateEmailVerificationToken(userPayload);
    res
      .status(201)
      .json({ message: "User created successfully", emailVerifyToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { createUser };
