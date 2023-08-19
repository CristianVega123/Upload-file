import { Router } from "express";
import { sentData } from "../controllers/sentData.api";

const router = Router();

router.get("/data/:id", sentData);

export default router;
