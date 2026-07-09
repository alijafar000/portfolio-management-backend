import express from 'express'
import { addSkill, deleteSkill, getSkill, updateSkill } from '../Controllers/skill.js';
import { isAuthenticate } from "../Middleware/Auth.js";
import { skillValidation } from '../Middleware/Validator.js';


const router = express.Router();

//add skill
/**
 * @swagger
 * /api/skill/new:
 *   post:
 *     summary: Add New Skill
 *     tags:
 *       - Skill
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - skillName
 *               - level
 *             properties:
 *               skillName:
 *                 type: string
 *                 example: Node.js
 *               level:
 *                 type: string
 *                 example: Advanced
 *     responses:
 *       201:
 *         description: Skill added successfully
 *       400:
 *         description: Invalid input
 */
router.post('/new', isAuthenticate, skillValidation, addSkill)

//get skill
/**
 * @swagger
 * /api/skill:
 *   get:
 *     summary: Get All Skills
 *     tags:
 *       - Skill
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Skills fetched successfully
 *       404:
 *         description: No skills found
 */
router.get('/', isAuthenticate, getSkill)

//update skill
/**
 * @swagger
 * /api/skill/{id}:
 *   put:
 *     summary: Update Skill
 *     tags:
 *       - Skill
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               skillName:
 *                 type: string
 *               level:
 *                 type: string
 *     responses:
 *       200:
 *         description: Skill updated successfully
 *       404:
 *         description: Skill not found
 */
router.put("/:id", isAuthenticate, skillValidation, updateSkill);

//delete skill
/**
 * @swagger
 * /api/skill/{id}:
 *   delete:
 *     summary: Delete Skill
 *     tags:
 *       - Skill
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     responses:
 *       200:
 *         description: Skill deleted successfully
 *       404:
 *         description: Skill not found
 */
router.delete('/:id', isAuthenticate, deleteSkill)

export default router