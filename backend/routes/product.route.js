import express from 'express';
import { authSeller } from '../middleware/authSeller.js';
import { upload } from '../config/multer.js';
import { addProduct, changeStock, getProductById, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/add-product', authSeller, upload.array('images', 4), addProduct);
router.get('/list', getProducts);
router.get('/:id', getProductById);
router.post('/stock', authSeller, changeStock);

export default router;
