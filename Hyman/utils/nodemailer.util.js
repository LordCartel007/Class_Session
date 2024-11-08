import nodemailer from "nodemailer";
import generateOTP from "./otp.util.js";

const sendVerificationEmail = async (user) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Disables the self-signed certificate validation
    },
  });
  const otp = await generateOTP(user._id);

  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "One Time Verification Code",
    text: `Welcome to Hyman. To complete your registration. Please use the following Your one time password ${otp}`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { sendVerificationEmail };
