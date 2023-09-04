import { Router } from "express";
import multer, { memoryStorage } from "multer";
import { storage } from "../../config/multer.config";
import { CreateDataUpload } from '../controllers/createDataUpload'

const router = Router();
let upload;
if ((process.env.NODE_MODE as string).toLowerCase() === "production") {
  upload = multer({
    storage: memoryStorage()
  })
  
} else {
  upload = multer({
   storage,
 });
  
}

router.post("/upload", upload.single("file"), CreateDataUpload);

export default router;
