import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    // create review & save to MongoDB
    const newReview = new Review (req.body);
    const savedReview = await newReview.save();
    // sends the saved review back to the frontend
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review " });
  }
});

// Export router so server.js can use it
export default router;
