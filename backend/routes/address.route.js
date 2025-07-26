import express from 'express';
import { authUser } from '../middleware/authUser.js';
import { addAddress, getAddresses } from '../controllers/address.controller.js';

const router = express.Router();


router.post("/add", authUser, addAddress);
router.get("/get", authUser, getAddresses);
export default router;