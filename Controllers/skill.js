import { Skill } from '../Models/Skill.js'

//add Skill
export const addSkill = async (req, res) => {
    const { skillName, level } = req.body;

    if (!skillName || !level) return res.json({ message: "All fields are required...", success: false })
    
    let skill = await Skill.findOne({user: req.user._id, skillName})
    if(skill) return res.json({message: "Skill already added...", success: false})    

    let savedSkill = await Skill.create({
        user: req.user._id, skillName, level
    })
    res.json({ message: "Skill added successfully...", savedSkill, success: true })
}

//get skill
export const getSkill = async (req, res) => {
    const userSkill = await Skill.find({ user: req.user._id })

    if (userSkill.length === 0) return res.json({ message: "No skill exists...", success: false })
    res.json({ message: "Skill fetched...", userSkill, success: true })
}

//update skill
export const updateSkill = async (req, res) => {
    const id = req.params.id;
    const { skillName, level } = req.body;

    let updatedSkill = await Skill.findOneAndUpdate({
        _id: id,
        user: req.user._id
    },
        { skillName, level },
        { new: true }
    )
    if (!updatedSkill) return res.json({ message: "No skill exist...", success: false })
    res.json({ message: "Skill update successfully...", updatedSkill, success: true })
}
//delete skill
export const deleteSkill = async (req, res) => {
    const id = req.params.id;

    let deletedSkill = await Skill.findOneAndDelete({
        _id: id,
        user: req.user._id
    }
    )
    if (!deletedSkill) return res.json({ message: "No skill exist...", success: false })
    res.json({ message: "Skill delete successfully...", success: true })
}