import { Router } from "express";
import { getRepairBay, getStatus, postTeapot } from "./controller";

const router = Router();

router.get("/status", getStatus);
router.get("/repair-bay", getRepairBay);
router.post("/teapot", postTeapot);

export default router;
