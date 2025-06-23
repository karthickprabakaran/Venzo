import express from "express";
const router = express.Router();
import {
  getAllFeedbacks,
  getSingleFeedback,
  createFeedback,
  upvoteFeedback,
  updateFeedbackStatus,
} from "../controller/feedbackController.js";

router.get("/feedbacks", getAllFeedbacks);
router.get("/feedbacks/:id", getSingleFeedback);
router.post("/feedbacks", createFeedback);
router.patch("/feedbacks/:id/upvote", upvoteFeedback);

router.patch("/feedbacks/:id/status", updateFeedbackStatus);

export default router;
