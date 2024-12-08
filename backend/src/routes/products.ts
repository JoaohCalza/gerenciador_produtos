import { Router } from "express";
import {
    postProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} from "../models/product"; 

const router = Router();

router.post("/webmob/products", postProduct);

router.get("/webmob/products", getProducts);

router.get("/webmob/products/:id", getProduct);

router.put("/webmob/products/:id", updateProduct);

router.delete("/webmob/products/:id", deleteProduct);



export default router;
