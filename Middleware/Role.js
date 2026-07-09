export const isAdmin = (req, res, next)=>{
    if(req.user.role !== "admin"){
        return res.json({message: "Access denied. Admin only", success: false})
    }
    next();
}