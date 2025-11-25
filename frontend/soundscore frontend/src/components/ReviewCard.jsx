import React from "react";

function ReviewCard({ review, onEdit, onDelete}) {
  return (
    <div className="review-card">
        {review.artistImage && (
            <img src={review.artistImage} alt={review.artistName} 
            style={{ width: "100px", height: "100px", borderRadius: "8px" }}/>
        )}

      <h3>{review.artistName}</h3>
      <p>
        <strong>Album:</strong> {review.albumName}
      </p>
      {review.songName && (
        <p>
          <strong>Song:</strong> {review.songName}
        </p>
      )}
      <p>
        <strong>Rating:</strong> {review.rating} / 5
      </p>
      <p>
        <strong>Comment:</strong> {review.comment}
      </p>

      {/* buttons */}
      <button onClick={onEdit} className="Editbttn">Edit</button>
      <button onClick={onDelete} className="Deletebttn">Delete</button>
    </div>
  );
}


export default ReviewCard ;