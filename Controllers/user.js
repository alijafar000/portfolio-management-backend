import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (name == "" || email == "" || password == "") return res.json({
        message: "All fields are required..."
    })

    let user = await User.findOne({ email });

    if (user) return res.json({
        message: "User alredy registered...",
        success: false
    })

    let hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPassword });
    res.json({
        message: "User created successfully...",
        success: true,
        user: user
    })
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (email == "" || password == "") return res.json({
        message: "All fields are required...",
        success: false
    })

    //finding user email from db
    const user = await User.findOne({ email });

    if (!user) return res.json({
        message: "User not found...",
        success: false
    })

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.json({
        message: "Invalid password...",
        success: false
    })

    //generating jwt token
    const token = jwt.sign({ userId: user._id }, process.env.JWT);

    res.json({
        message: `Welcome ${user.name}`,
        token,
        success: true
    })

}