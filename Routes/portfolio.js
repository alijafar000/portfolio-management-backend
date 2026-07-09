import { isAuthenticate } from "../Middleware/Auth.js";
import express from 'express';
import { addPortfolio, getPortfolio, updatePortfolio } from "../Controllers/portfolio.js";
import { portfolioValidation } from "../Middleware/Validator.js";

const router = express.Router();

//add portfolio
/**
 * @swagger
 * /api/portfolio/new:
 *   post:
 *     summary: Create Portfolio
 *     tags:
 *       - Portfolio
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - about
 *               - phone
 *               - socialLinks
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Jafar Ali
 *               email:
 *                 type: string
 *                 example: jafar@gmail.com
 *               about:
 *                 type: string
 *                 example: Backend Developer
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               socialLinks:
 *                 type: object
 *                 properties:
 *                   github:
 *                     type: string
 *                     example: https://github.com/jafar
 *                   linkedin:
 *                     type: string
 *                     example: https://linkedin.com/in/jafar
 *     responses:
 *       201:
 *         description: Portfolio created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post('/new', isAuthenticate, portfolioValidation, addPortfolio)

//get portfolio
/**
 * @swagger
 * /api/portfolio:
 *   get:
 *     summary: Get User Portfolio
 *     tags:
 *       - Portfolio
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Portfolio fetched successfully
 *       404:
 *         description: Portfolio not found
 */
router.get('/', isAuthenticate, getPortfolio)

//update portfolio
/**
 * @swagger
 * /api/portfolio:
 *   put:
 *     summary: Update Portfolio
 *     tags:
 *       - Portfolio
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Portfolio ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               about:
 *                 type: string
 *               phone:
 *                 type: string
 *               socialLinks:
 *                 type: object
 *     responses:
 *       200:
 *         description: Portfolio updated successfully
 *       404:
 *         description: Portfolio not found
 */
router.put('/', isAuthenticate, portfolioValidation, updatePortfolio)

export default router;