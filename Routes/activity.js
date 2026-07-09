import express from "express";

import { getActivities }
from "../Controllers/activity.js";

import { isAuthenticate }
from "../Middleware/Auth.js";

const router = express.Router();


/**
 * @swagger
 * /api/activity:
 *   get:
 *     summary: Get User Activity Logs
 *     description: Fetch all activity logs of the authenticated user.
 *     tags:
 *       - Activity
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Activity logs fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No activity found
 */
router.get(
   "/",
   isAuthenticate,
   getActivities
)

export default router;