import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    profileImage: {
        type: String,
        default: ""
    },
    createdAt: { type: Date, default: Date.now }
})

export const User = mongoose.model('User', userSchema);