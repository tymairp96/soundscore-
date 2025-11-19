import express from "express";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    res.send("Getting all music reviews...");
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    res.send("Creating a new music review...");
  } catch (error) {
    res.status(500).json({ message: "Error creating review " });
  }
});

// Export router so server.js can use it
export default router;
