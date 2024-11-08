import { Types, Schema, model } from "mongoose";

const otpSchema = new Schema(
  {
    otp: {
      type: String,
      required: true,
    },
    // use the user id to reference the user . the user should be exactly the same as the user model
    user: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const Otp = model("otp", otpSchema);

export default Otp;
