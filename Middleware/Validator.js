import { body, validationResult } from "express-validator";

//register validation
export const registerValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
];

export const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

//login validation
export const loginValidation = [
    body("email")
    .isEmail()
    .withMessage("Enter valid Email"),

    body("password")
    .notEmpty()
    .withMessage("Password is required"),

    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        next();
    }
]

//project validation
export const projectValidation = [
    body("projectName")
    .notEmpty()
    .withMessage("Project name is required"),

    body("description")
    .notEmpty()
    .withMessage("Description is required"),

    body("category")
    .notEmpty()
    .withMessage("Category is required"),

    body("technologiesUsed")
    .isArray({min: 1})
    .withMessage("At least one technology is required"),

    (req, res, next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        next()
    }
]

//portfolio validation
export const portfolioValidation = [

    body("fullName")
        .notEmpty()
        .withMessage("Full name is required"),

    body("email")
        .isEmail()
        .withMessage("Enter valid email"),

    body("phone")
        .isLength({ min:10,max:10 })
        .withMessage("Phone must be 10 digits"),

    body("about")
        .notEmpty()
        .withMessage("About is required"),

    (req,res,next)=>{

        const errors=validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success:false,
                errors:errors.array()
            })
        }

        next();
    }

];

//skill validation
export const skillValidation=[

    body("skillName")
    .notEmpty()
    .withMessage("Skill name required"),

    body("level")
    .isIn(["Beginner","Intermediate","Advanced"])
    .withMessage("Invalid level"),

    (req,res,next)=>{

        const errors=validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success:false,
                errors:errors.array()
            })
        }

        next();
    }

];