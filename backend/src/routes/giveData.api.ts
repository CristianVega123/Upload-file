import { Router } from "express";
import { getDataAll } from "../controllers/sentAllData.api";

const router = Router()


router.get("/all", getDataAll);

export default router;