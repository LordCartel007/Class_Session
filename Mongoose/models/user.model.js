// import { Schema, model } from "mongoose";

// const userSchema = new Schema(
//   {
//     fullname: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     role: {
//       type: String,
//       required: true,
//       default: "user",
//     },
//     gender: {
//       type: String,
//       required: true,
//       enum: ["male", "female", "other"],
//     },
//     interests: {
//       type: [String],
//       default: [],
//     },
//     profileImage: {
//       type: {
//         url: {
//           type: String,
//         },
//         filename: {
//           type: String,
//         },
//       },
//     },
//   },
//   { timestamps: true }
// );

// // modelling the schema create a model from the schema

// const User = model("User", userSchema);

// export default User;
