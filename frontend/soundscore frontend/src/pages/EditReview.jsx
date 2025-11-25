import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditReview() {
  // get the review id from the URL
  const { id } = useParams();
  // allows navigation
  const navigate = useNavigate();

  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songName, setSongName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews/${id}`
        );
        const data = await res.json();

        setArtistName(data.artistName);
        setAlbumName(data.albumName);
        setSongName(data.songName);
        setRating(data.rating);
        setComment(data.comment);
      } catch (err) {
        console.error("Error fetching review:", err);
      }
    };
    fetchReview();
  }, [id]);

  //   Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedReview = {
      artistName,
      albumName,
      songName,
      rating,
      comment,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedReview),
      });

      const data = await res.json();
      console.log("Review updated:", data);

      //  redirect home
      navigate("/");
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };

  return (
    <div className="Add-review-container">
      <h1> Edit Review</h1>

      <form className="add-review-form" onSubmit={handleSubmit}>
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
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="Submit">Update Review</button>
      </form>
    </div>
  );
}
export default EditReview;
