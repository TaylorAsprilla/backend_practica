import { Router } from "express";
import { createStore, getStoreById, getStores } from "../controllers/store.controller";
import { deleteProductById, updateProductById } from "../controllers/products.controller";

const router = Router()


router.get('/',getStores)
router.get('/:id',getStoreById)
router.post('/create',createStore)
router.patch('/update/:id',updateProductById)
router.delete('/delete/:id',deleteProductById)

export default router

