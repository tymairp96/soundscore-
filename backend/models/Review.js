import mongoose from "mongoose";
// schema for a music review
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
        required: false,
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

// Add an index 
reviewSchema.index({ artistName: 1 });

const Review = mongoose.model("Review", reviewSchema);

export default Review;