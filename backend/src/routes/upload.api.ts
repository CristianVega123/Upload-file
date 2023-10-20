import { Router } from "express";
import multer, { memoryStorage } from "multer";
import { storage } from "../../config/multer.config";
import { CreateDataUpload } from '../controllers/createDataUpload'

const router = Router();
let upload ;
let config_mode;

if ((process.env.NODE_MODE as string).toLowerCase() === "production") {
  upload = multer({
    storage: memoryStorage()
  })
  
  config_mode = upload.array("files_save", 10)

} else {
  upload = multer({
   storage,
 });
 config_mode = upload.single("file")

}

router.post("/upload", config_mode , CreateDataUpload);

export default router;
