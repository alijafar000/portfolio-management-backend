import { Portfolio } from '../Models/Portfolio.js'

//add portfolio
export const addPortfolio = async (req, res) => {
    const { fullName, email, about, phone, socialLinks } = req.body;

    if (!fullName || !email || !about || !phone || !socialLinks) return res.json({
        message: "All fields are required...",
        success: false
    })

    let portfolio = await Portfolio.findOne({ user: req.user._id })
    if (portfolio) return res.json({
        message: "Portfolio already added...",
        success: false
    })

    let savedPortfolio = await Portfolio.create({
        user: req.user._id, fullName, email, about, phone, socialLinks
    })
    res.json({ message: "Portfolio added successfully...", savedPortfolio, success: true })
}

//get portfolio
export const getPortfolio = async (req, res) => {
    const userPortfolio = await Portfolio.findOne({ user: req.user._id })

    if (!userPortfolio) return res.json({
        message: "No portfolio exists...",
        success: false
    })
    res.json({ message: "Portfolio fetched...", userPortfolio, success: true })
}

//update portfolio
export const updatePortfolio = async (req, res) => {
    // const id = req.params.id;
    const { fullName, email, about, phone, socialLinks } = req.body;

    let updatedPortfolio = await Portfolio.findOneAndUpdate({
        user: req.user._id
    },
        {
            fullName,
            email,
            about,
            phone,
            socialLinks
        }, { new: true }
    )
    if(!updatedPortfolio) return res.json({message: "No portfolio exists...", success: false})
    res.json({message: "Portfolio updated successfully...", updatedPortfolio, success: true})    
}