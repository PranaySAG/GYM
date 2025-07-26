import Product from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

// Add product
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, offerPrice, category } = req.body;
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Create product
    await Product.create({
      name,
      description,
      price,
      offerPrice,
      category,
      image: imageUrls, // ✅ Make sure this matches your schema
    });

    return res.status(201).json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("Error in addProduct:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProducts:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error in getProductById:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Change product stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      { inStock },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error in changeStock:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
