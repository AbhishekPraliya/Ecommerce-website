import express from "express";
import {
    loginOwner,
    deleteOwner,
    deleteAllOwners,
    getOwner,
    getAllOwners,
    updateOwnerDetails
} from "../controllers/owner.controller.js";

const router = express.Router();

// Routes
router.post("/login", loginOwner);
router.delete("/:id", deleteOwner);
router.delete("/", deleteAllOwners);
router.get("/:id", getOwner);
router.get("/", getAllOwners);
router.put("/:id", updateOwnerDetails);

export default router;
