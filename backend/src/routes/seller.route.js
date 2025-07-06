// routes/seller.routes.js
import express from "express";
import {
    createSeller,
    deleteSeller,
    updateSellerDetails,
    updateMobileNumber,
    getOrdersDetails,
    getBusiness,
    createBusiness,
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
router.get("/business/:sellerId", getBusiness);
router.post("/business/create", createBusiness);
router.put("/gateway/:sellerId", updatePaymentGatewayDetails);

export default router;
