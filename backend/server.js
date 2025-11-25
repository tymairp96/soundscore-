import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import reviewRoutes from "./routes/reviewRoutes.js";



const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware

// Enables CORS so react frontend can communicate with backend
app.use(cors());

// Enables JSON parsing for POST requests
app.use(express.json());

app.use("/reviews", reviewRoutes)


// Test route
app.get("/", (req, res) => {
  res.send("Music Review API is running");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
