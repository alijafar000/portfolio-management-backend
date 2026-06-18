import { isAuthenticate } from "../Middleware/Auth.js";
import express from 'express';
import { addPortfolio, getPortfolio, updatePortfolio } from "../Controllers/portfolio.js";

const router = express.Router();

//add portfolio
router.post('/new', isAuthenticate, addPortfolio)

//get portfolio
router.get('/', isAuthenticate, getPortfolio)

//update portfolio
router.put('/', isAuthenticate, updatePortfolio)

export default router;