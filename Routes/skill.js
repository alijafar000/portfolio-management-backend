import express from 'express'
import { addSkill, deleteSkill, getSkill, updateSkill } from '../Controllers/skill.js';
import { isAuthenticate } from "../Middleware/Auth.js";


const router = express.Router();

//add skill
router.post('/new', isAuthenticate, addSkill)

//get skill
router.get('/', isAuthenticate, getSkill)

//update skill
router.put('/:id', isAuthenticate, updateSkill)

//delete skill
router.delete('/:id', isAuthenticate, deleteSkill)

export default router