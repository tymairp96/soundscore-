import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    // Fetch all review from MondoDB
    const reviews = await Review.find();
    // Send reviews back to frontend 
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const { artistName, albumName, songName, rating, comment } = req.body;

    // validate input 
     if (!artistName || !albumName || !rating || !comment) {
        return res.status(400).json({ message: "Missing required fields"});
     }
//  Fetch artist info from itunes API
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        artistName
      )}&entity=album&limit=1`
    );
    const data = await response.json();
    const firstResult = data.results[0];
    const artistImage = firstResult ? firstResult.artworkUrl100 : null;

   
// Create new review 
    const newReview = new Review({
      songName,
      artistName,
      artistImage,
      albumName,
      rating,
      comment,
    });
    // save review to MongoDB
    const savedReview = await newReview.save();
   
   
    // sends the saved review back to the frontend
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review"});
  }
});

// Export router so server.js can use it
export default router;
