
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// Mongo connection /MongoDB using URI from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
     
    }
};

export default connectDB;
