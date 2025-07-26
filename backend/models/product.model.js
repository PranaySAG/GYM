import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  images: {  // also fix key name: was `image` but your controller uses `images`
    type: [String],
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,  // ✅ fixed typo here
    required: true,
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
