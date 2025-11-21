import { useState } from "react";

function AddReview() {
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songName, setSongName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!artistName.trim() || !albumName.trim() || comment.trim()) {
      alert("Artist, album, and comment cannot be empty.");
      return;
    }

    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    try {
      // create new review object

      const newReview = { artistName, albumName, songName, rating, comment };

      // send POST request to backend
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      const data = await res.json();
      console.log("Review saved:", data);

      // clear form after submission
      setArtistName("");
      setAlbumName("");
      setSongName("");
      setRating(1);
      setComment("");
    } catch (err) {
      console.error("Error saving review:", err);
    }
  };

  return (
    <div>
      <h1> Add a New Review </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          min={1}
          max={5}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
