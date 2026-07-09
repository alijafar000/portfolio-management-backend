import express from "express";
import { isAuthenticate } from "../Middleware/Auth.js";
import { getDashboardStats } from "../Controllers/dashboard.js";

const router = express.Router();

//dashboard stats
/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get Dashboard Summary
 *     description: Returns dashboard statistics including total projects, skills, portfolio status, and activities for the authenticated user.
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data fetched successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get("/stats",isAuthenticate,getDashboardStats);

export default router;