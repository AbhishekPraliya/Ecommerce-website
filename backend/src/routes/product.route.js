// routes/product.routes.js
import express from "express";
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    getProductsBySearch,
    getProductsByBrandId,
    getProductsByIdList,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/:id", getProduct);
router.get("/category/:categoryId", getAllProducts);
router.get("/search", getProductsBySearch);
router.get("/brand/:id", getProductsByBrandId);
router.post("/list", getProductsByIdList);

export default router;

