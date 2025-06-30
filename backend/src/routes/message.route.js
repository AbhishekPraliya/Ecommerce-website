import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getHomePageData, getAllUsers, sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users",protectRoute,getAllUsers)

router.get("/:id",protectRoute,getHomePageData);

router.post("/send/:id",protectRoute,sendMessage);

export default router;