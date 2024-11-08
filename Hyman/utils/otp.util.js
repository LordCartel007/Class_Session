// importing the Otp model
import Otp from "../models/otp.model.js";

const generateOTP = async (userId) => {
  const min = 100000;
  const max = 999999;
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;

  try {
    // USE THE DELETE MANY METHOD TO DELETE ALL OTPS THAT HAVE THE USER ID BEFORE CREATING A NEW ONE
    await Otp.deleteMany({ user: userId });
    const newOtp = await Otp.create({ otp, user: userId });
    // Return the OTP value so it can be used in other parts of your application
    return otp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default generateOTP;
