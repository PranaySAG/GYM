import express from 'express';
import { authUser } from '../middleware/authUser.js';
import { authSeller } from '../middleware/authSeller.js';
import {
  placeOrderCOD,
  getUserOrders,
  getAllOrders
} from '../controllers/order.controller.js';

const router = express.Router();

// ✅ Place order via Cash on Delivery
router.post("/cod", authUser, placeOrderCOD);

// ✅ Get orders for a logged-in user
router.get("/user", authUser, getUserOrders);

// ✅ Get all orders (for sellers/admins)
router.get("/seller", authSeller, getAllOrders);

export default router;
