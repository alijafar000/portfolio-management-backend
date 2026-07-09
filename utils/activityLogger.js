import { Activity } from "../Models/Activity.js";

export const logActivity = async (
    userId,
    action,
    details
) => {

    await Activity.create({
        user: userId,
        action,
        details
    });

}