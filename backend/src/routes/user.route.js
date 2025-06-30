// user.routes.js
import express from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getAllUsers,
    addProductIntoCart,
    deleteProductFromCart,
    addProductIntoWishlist,
    deleteProductFromWishlist,
    addProductIntoOrder,
    deleteProductsFromOrder,
    getUserAddress,
    changeUserAddress,
    getWalletData,
    getPaymentData,
    changePhoneNumber,
    changeDateOfBirth,
    changeGender,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", createUser);
router.delete("/delete/:userId", deleteUser);
router.get("/:userId", getUser);
router.get("/all", getAllUsers);
router.put("/phone/:userId", changePhoneNumber);
router.put("/dob/:userId", changeDateOfBirth);
router.put("/gender/:userId", changeGender);

router.post("/cart/:productId", addProductIntoCart);
router.delete("/cart/:productId", deleteProductFromCart);

router.post("/wishlist/:productId", addProductIntoWishlist);
router.delete("/wishlist/:productId", deleteProductFromWishlist);

router.post("/order", addProductIntoOrder);
router.delete("/order/:orderId", deleteProductsFromOrder);

router.get("/address/:userId", getUserAddress);
router.put("/address/change/:userId", changeUserAddress);

router.get("/wallet/:userId", getWalletData);
router.get("/payment/:userId", getPaymentData);

export default router;

