import { Router } from "express";
import {
    postCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    getProducts2
} from "../models/category";

const router = Router();

router.post("/webmob/categories", postCategory);

router.get("/webmob/categories", getCategories);

router.get("/webmob/categories/:id", getCategory);

router.put("/webmob/categories/:id", updateCategory);

router.delete("/webmob/categories/:id", deleteCategory);

router.get('/webmob/productsCat', getProducts2);

export default router;
