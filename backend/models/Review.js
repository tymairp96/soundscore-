import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    artistName: {
        type: String,
        required: true,
    },
    songName: {
        type:  String,
        required: true,
    },
    artistImage: {
        type: String, 
        required: false,
    },
    albumName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
        
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;