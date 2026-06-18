import { Project } from "../Models/Project.js";

//add new project
export const addProject = async (req, res) => {
    const { projectName, description, technologiesUsed, category } = req.body;

    if (projectName == "" || description == "" || technologiesUsed == "" || category == "") return res.json({
        message: "All fields are required...",
        success: false
    })

    let project = await Project.findOne({ projectName, user: req.user._id });

    if (project) return res.json({
        message: "Project already added...",
        success: false
    })

    let savedProject = await Project.create({
        user: req.user._id, projectName, description, technologiesUsed, category
    })
    res.json({
        message: "Project add successfully...",
        savedProject,
        success: true
    })
}

//get all project
export const getAllProject = async (req, res) => {
    const userProject = await Project.find({user: req.user._id});

    if (userProject.length === 0) return res.json({
        message: "No project exists...",
        success: false
    })

    res.json({ message: "All project fetched...", userProject, success: true })
}

//get project by id
export const getProjectById = async (req, res) => {
    const id = req.params.id;

    const userProject = await Project.findOne({_id: id, user: req.user._id});
    if (!userProject) return res.json({ message: "No project exists...", success: false })

    res.json({ message: "Project Fetched", userProject, success: true })
}

//update project 
export const updateProject = async (req, res) => {
    const id = req.params.id;

    const { projectName, description, technologiesUsed, category } = req.body;

    let updatedProject = await Project.findOneAndUpdate({
      _id: id,
      user: req.user._id
   },
    {
        projectName,
        description,
        technologiesUsed, 
        category
    }, { new: true });

    if (!updatedProject) return res.json({
        message: "No project exists...",
        success: false
    })

    res.json({
        message: "Project update successfully...",
        updatedProject,
        success: true
    })
}

//delete project
export const deleteProject = async (req, res) => {
    const id = req.params.id;

    let deletedProject = await Project.findOneAndDelete({
      _id: id,
      user: req.user._id
   },);

    if (!deletedProject) return res.json({
        message: "No project exists...",
        success: false
    })
    res.json({
        message: "Project delete successfully...",
        success: true
    })
}

//search project
export const searchProject = async (req, res) => {
    const { name, category, technology } = req.query;

    let query = {
        user: req.user._id
    };

    if (name) {
        query.projectName = {
            $regex: name,
            $options: "i"
        };
    }

    if (category) {
        query.category = category;
    }

    if (technology) {
        query.technologiesUsed = {
            $in: [technology]
        };
    }

    const projects = await Project.find(query);

    if (projects.length === 0) {
        return res.json({
            message: "No project found...",
            success: false
        });
    }

    res.json({
        message: "Projects fetched successfully...",
        projects,
        success: true
    });
};