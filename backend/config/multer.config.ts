import { diskStorage } from "multer";
import { randomUUID } from "crypto";
import { access, constants, mkdir } from "node:fs";
import { path_dirname } from "../url";

export const storage = diskStorage({
    destination(req, file, cb) {
        access(`${path_dirname}\\data`, constants.F_OK, (err) => {
            if (err) {
                mkdir(`${path_dirname}\\data`, {recursive: true}, (err) => {
                    if(err) console.log(err)
                })
            }
            cb(null, 'data')
        })
    },
    filename: (req, file, cb) => {
        let { mimetype } = file;
        let extension = mimetype.split("/")[1];

        cb(null, `image-${randomUUID()}.${extension}`)
    },
});

