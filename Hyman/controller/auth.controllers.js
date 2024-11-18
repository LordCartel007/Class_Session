import User from "../models/user.model.js";
// the hashing password packgae bcrypt
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../utils/nodemailer.util.js";
import {
  generateEmailVerificationToken,
  generateAccessToken,
} from "../utils/token.js";
import Otp from "../models/otp.model.js";

const createUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  console.log(req.body);

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
      _id: newUser._id,
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

// controller to recieve the otp and verify the user email
const verifyEmail = async (req, res) => {
  const { otp } = req.body;
  let token = null;
  // extract the token from the header
  const authHeader = req.headers["authorization"];

  // keep the space after Bearer cause there is character there
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }
  // check if token exist
  if (!token) {
    return res.status(401).json({ message: "Unauthorised" });
  }
  // verify the token
  try {
    const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET);

    const otpDoc = await Otp.findOne({ otp, user: payload._id });
    if (!otpDoc) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // check otp expiry
    const currentTime = new Date();

    if (currentTime.getTime() > otpDoc.createdAt.getTime() > 600000) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // using the new to bring the updated user
    // update user to verified
    const updatedUser = await User.findOneAndUpdate(
      { _id: payload._id },
      { isVerified: true },
      { new: true }
    );

    // delete theotp
    await otpDoc.deleteOne();

    // generate an access token
    const userPayload = {
      _id: updatedUser._id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      isVerified: updatedUser.isVerified,
    };

    const accessToken = generateAccessToken(userPayload);

    return res.status(200).json({ message: "Email verified", accessToken });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

// controller to login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  // check if user is verified
  const userPayload = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    isVerified: user.isVerified,
  };
  if (!user.isVerified) {
    // resend verification email
    await sendVerificationEmail(user);

    // generate email verification and send to cilent
    await sendVerificationEmail(user);

    // Generate email verification token and send to cilent

    const emailVerifyToken = generateEmailVerificationToken(userPayload);

    return res
      .status(201)
      .json({ message: "Verification email sent", emailVerifyToken });
  }
  // check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Generate access token
  const accessToken = generateAccessToken(userPayload);

  res.status(200).json({ message: "Login successful", accessToken });
};

const getUserProfile = (req, res) => {
  const user = req.user;
  res.status(200).json({ user });
};

export { createUser, verifyEmail, loginUser, getUserProfile };
