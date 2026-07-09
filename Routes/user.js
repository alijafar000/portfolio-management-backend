import express from 'express'
import { login, register, uploadProfileImage } from '../Controllers/user.js';
import { upload } from '../Middleware/Upload.js';
import { isAuthenticate } from '../Middleware/Auth.js';
import { loginValidation, registerValidation, validate } from '../Middleware/Validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register User
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jafar Ali
 *               email:
 *                 type: string
 *                 example: jafar@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User Registered Successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User registered successfully
 *               user:
 *                 _id: 6864d1d53c1d5f26f2d4c321
 *                 name: Jafar Ali
 *                 email: jafar@gmail.com
 *       400:
 *         description: Invalid Input
 */
router.post('/register', registerValidation, validate, register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: jafar@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login Successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Login Successfully
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxxxxxxxxx
 *       401:
 *         description: Invalid Credentials
 */
router.post('/login', loginValidation, login);

//profile image
/**
 * @swagger
 * /api/user/upload-profile:
 *   put:
 *     summary: Upload User Profile Image
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - profileImage
 *             properties:
 *               profileImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile image uploaded successfully
 *       400:
 *         description: Image upload failed
 *       401:
 *         description: Unauthorized
 */
router.put("/upload-profile", isAuthenticate,
   upload.single("profileImage"), 
   uploadProfileImage
);

export default router;