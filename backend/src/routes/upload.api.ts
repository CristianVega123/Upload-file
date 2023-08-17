import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { storage } from "../../config/multer.config";

const router = Router()
const upload = multer({
    // dest: "upload",
    storage
})

router.post("/upload",upload.single("file") ,(req: Request, res: Response) => {
    console.log(req.file)
    console.log(req.body)
    res.send(200)
})


export default router;