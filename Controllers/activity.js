import { Activity } from "../Models/Activity.js";

export const getActivities =
async (req,res)=>{

    const activities =
    await Activity.find({
        user:req.user._id
    })
    .sort({createdAt:-1});

    res.json({
        success:true,
        activities
    })
}