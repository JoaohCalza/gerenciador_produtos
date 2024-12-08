import { Router } from "express";
import { loginUser } from "../models/auth"

const router = Router();

router.post("/webmob/login", loginUser);

export default router;
