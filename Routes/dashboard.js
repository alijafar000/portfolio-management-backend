import express from "express";
import { isAuthenticate } from "../Middleware/Auth.js";
import { getDashboardStats } from "../Controllers/dashboard.js";

const router = express.Router();

//dashboard stats
router.get("/stats",isAuthenticate,getDashboardStats);

export default router;