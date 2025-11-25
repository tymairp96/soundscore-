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
// Get a single review
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
 if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Error fetching review" });
  }
});

// DELETE a review
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully", deletedReview });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review" });
  }
});

// UPDATE a review
router.put("/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {artistName, albumName, songName, rating, comment } = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            id,
            {artistName, albumName, songName, rating, comment},
            // return after update
            {new: true }
        );
        if (!updatedReview) {
            return res.status(404).json ({ message: "Review not found"});
        }
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: "Error updating review"});
    }
});
// POST a new review
router.post("/", async (req, res) => {
  try {
    const { artistName, albumName, songName, rating, comment } = req.body;

    // validate input
    if (!artistName || !rating || !comment) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const searchTerm = artistName;
    //  Fetch artist info from itunes API
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchTerm
      )}&entity=song&limit=1`
    );
    const data = await response.json();
    const firstResult = data.results[0];
   
    // Get artist picture 
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
    res.status(500).json({ message: "Error creating review" });
  }
});

// Export router so server.js can use it
export default router;
