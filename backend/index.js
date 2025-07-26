import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import { connectDB } from './config/connectDB.js';
import { connectCloudinary } from './config/cloudinary.js';

import userRoutes from "./routes/user.route.js";
import sellerRoutes from "./routes/seller.route.js";
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import orderRoutes from './routes/order.routes.js';
import addressRoutes from './routes/address.route.js';

dotenv.config();

// 1. Connect to MongoDB
connectDB();

// 2. Initialize Express app
const app = express();

// 3. Cloudinary setup
connectCloudinary();

// 4. Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS configuration (IMPORTANT FOR COOKIES)
const allowedOrigins = ["http://localhost:5173"];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// 5. Test route
app.get('/', (req, res) => {
  res.send("Hello world from API");
});

// 6. API Routes
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/address", addressRoutes);

// 7. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
