// routes/seller.routes.js
import express from "express";
import {
    createSeller,
    deleteSeller,
    updateSellerDetails,
    updateMobileNumber,
    getOrdersDetails,
    getBrands,
    createBrand,
    updatePaymentGatewayDetails,
    getAllSellers,
    getSeller,
} from "../controllers/seller.controller.js";

const router = express.Router();

router.post("/create", createSeller);
router.delete("/delete/:sellerId", deleteSeller);
router.put("/update/:sellerId", updateSellerDetails);
router.get("/:userId", getSeller);
router.get("/all", getAllSellers);
router.put("/phone/:sellerId", updateMobileNumber);
router.get("/orders/:sellerId", getOrdersDetails);
router.get("/brands/:sellerId", getBrands);
router.post("/brand/create", createBrand);
router.put("/gateway/:sellerId", updatePaymentGatewayDetails);

export default router;
