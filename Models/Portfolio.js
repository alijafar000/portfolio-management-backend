import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    fullName: {type: String, require: true},
    email: {type: String, require: true},
    about: {type: String, require: true},
    phone: {type: String, require: true},
    socialLinks: {
        github: {type: String, default: ""},
        linkdin: {type: String, default: ""},
        twitter: {type: String, default: ""}
    }
})

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);