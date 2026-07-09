import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        if(file.fieldname === "profileImage"){
            cb(null,"uploads/profiles");
        }
        else{
            cb(null,"uploads/projects");
        }
    },

    filename:(req,file,cb)=>{

        const uniqueName =
            Date.now() +
            path.extname(file.originalname);

        cb(null,uniqueName);
    }
});

export const upload = multer({
    storage
});