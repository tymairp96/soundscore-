import { useState } from "react";

function ReviewForm({ onAddReview }) {
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songName, setSongName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      artistName,
      albumName,
      songName,
      rating,
      comment,
    };

    onAddReview(newReview);

    // Clear the form

    setArtistName("");
    setAlbumName("");
    setSongName("");
    setRating(1);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h2>Add a Review</h2>

      <input
        type="text"
        placeholder="Artist Name"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Album Name"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Song Name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Submit Review</button>
    </form>
  );
}


export default ReviewForm;