import Feedback from "../models/FeedbackModel.js";

const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};

const getSingleFeedback = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) return res.status(404).json({ message: "Feedback not found" });
  res.json(feedback);
};

const createFeedback = async (req, res) => {
  console.log("Received feedback data:", req.body); // Log full body for debugging

  const { title, description, category, status } = req.body;

  if (!title || !description || !category || !status) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newFeedback = await Feedback.create({
      title,
      description,
      category,
      status,
    });

    res.status(201).json(newFeedback);
  } catch (error) {
    console.error("Error creating feedback:", error.message);
    res.status(400).json({ message: error.message });
  }
};


const upvoteFeedback = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) return res.status(404).json({ message: "Feedback not found" });

  feedback.upvotes += 1;
  await feedback.save();
  res.json({ message: "Upvoted", upvotes: feedback.upvotes });
};

export {
  getAllFeedbacks,
  getSingleFeedback,
  createFeedback,
  upvoteFeedback,
};
