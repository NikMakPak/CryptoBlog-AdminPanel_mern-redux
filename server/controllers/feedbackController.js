import Feedback from "../models/Feedback";

const createFeedback = async (req, res, next) => {
  try {
    const { name, email, question } = req.body;

    const feedback = await Feedback.create({
      name,
      email,
      question,
    });

    res.status(201).json(feedback);
  } catch (error) {
    next(error);
  }
};

export { createFeedback };
