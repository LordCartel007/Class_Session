import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
    },
    availability: {
      type: String,
      required: true,
      enum: ["In Stock", "Out of Stock"],
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const product = model("product", productSchema);

export default product;
