import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviewRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

// Enables CORS so react frontend can communicate with backend
app.use(cors());

// Enables JSON parsing for POST requests
app.use(express.json());

app.use("/reviews", reviewRoutes)

// Mongo connection /MongoDB using URI from .env file
// console.log("Mongo URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection errors:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Music Review API is running");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
