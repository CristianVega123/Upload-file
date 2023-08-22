import { Router } from "express";
import multer, {} from "multer";
import { storage } from "../../config/multer.config";
import { CreateDataUpload } from '../controllers/createDataUpload'

const router = Router();
const upload = multer({
  storage,
});

router.post("/upload", upload.single("file"), CreateDataUpload);

export default router;
