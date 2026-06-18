import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    skillName: {type: String, require: true},
    level: {type: String, require: true}
})

export const Skill = mongoose.model('Skill', skillSchema);