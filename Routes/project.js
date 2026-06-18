import express from 'express'
import { addProject, deleteProject, getAllProject, getProjectById, searchProject, updateProject } from '../Controllers/project.js';
import { isAuthenticate } from '../Middleware/Auth.js';

const router = express.Router();

//add project
// @api dsc :- adding project
// @api method :- post
// @api endpoint :- /api/project/new
router.post('/new', isAuthenticate, addProject);

//search project 
// @api dsc :- searching the project
// @api method :- get
// @api endpoint :- /api/project/search
router.get("/search", isAuthenticate, searchProject);


//get all project of user
// @api dsc :- getting all project
// @api method :- get
// @api endpoint :- /api/project/
router.get('/', isAuthenticate, getAllProject)


//get project by id
// @api dsc :- getting project by id
// @api method :- get
// @api endpoint :- /api/project/id_of_project
router.get('/:id', isAuthenticate, getProjectById)


//update project
// @api dsc :- updating the project
// @api method :- put
// @api endpoint :- /api/project/:id
router.put('/:id', isAuthenticate, updateProject);

//delete project
// @api dsc :- deleting the project
// @api method :- delete
// @api endpoint :- /api/project/:id
router.delete('/:id', isAuthenticate, deleteProject);



export default router;