import express from 'express'
import { isAuthenticate } from '../Middleware/Auth.js'
import { isAdmin } from '../Middleware/Role.js'

const router = express.Router();

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Admin Dashboard
 *     description: Access the admin dashboard. Only users with the Admin role can access this endpoint.
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin dashboard accessed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome Admin
 *                 success:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Unauthorized (JWT token missing or invalid)
 *       403:
 *         description: Forbidden (Only Admin can access this endpoint)
 */

router.get('/dashboard', isAuthenticate, isAdmin, (req, res)=>{
    res.json({message: "Welcome Admin", success: true})
})

export default router;