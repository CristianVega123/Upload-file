import { diskStorage } from "multer";
import { randomUUID } from "crypto";
import { access } from "fs/promises";

export const storage = diskStorage({
    destination(req, file, cb) {
        
        cb(null, 'data')
    },
    filename: (req, file, cb) => {
        let { mimetype, originalname } = file;
        let extension = mimetype.split("/")[1];

        console.log(file)
        cb(null, `${randomUUID()}.${extension}`)
    },
});

