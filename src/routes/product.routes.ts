import { Router } from "express";
import { createProduct, deleteProductById, getProductById, getProducts, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get('/',getProducts)
router.get('/id/:id',getProductById)
router.post('/create',createProduct)
router.put('/update/:id',updateProductById)
router.delete('/delete/:id',deleteProductById)

export default router