import express from "express";
import { createFeedback } from "../controllers/feedbackController";

const router = express.Router();

router.post("/", createFeedback);

export default router;
