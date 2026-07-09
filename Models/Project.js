import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    projectName: { type: String },
    description: { type: String },
    technologiesUsed: { type: Array },
    category: { type: String },
    projectImage: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending"
    },
    createdAt: { type: Date, default: Date.now }
})

export const Project = mongoose.model('Project', projectSchema)