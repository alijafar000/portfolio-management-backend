import { Project } from "../Models/Project.js";
import { Skill } from "../Models/Skill.js";

export const getDashboardStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const totalProjects = await Project.countDocuments({
            user: userId
        });

        const totalSkills = await Skill.countDocuments({
            user: userId
        });

        const projects = await Project.find({
            user: userId
        });

        const categoryCounts = {};

        projects.forEach((project) => {
            const category = project.category;

            categoryCounts[category] =
                (categoryCounts[category] || 0) + 1;
        });

        res.json({
            message: "Dashboard stats fetched successfully...",
            totalProjects,
            totalSkills,
            categoryCounts,
            success: true
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false
        });
    }
};