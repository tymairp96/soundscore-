import React from "react";

function NewsCard({ review}) {
    const {artistName, albumName, songName, rating, comment, artistImage} = review;

    return (
        <div className="news-card">
            {artistImage && <img src={artistImage} alt={`${artistName} artwork`} className="news-card-image" />}
            <div className="news-card-content"> 
                <h2>{artistName}</h2>
                <p><strong>Album:</strong> {albumName}</p>
                {songName && <p><strong>Song:</strong> {songName}</p>}
                <p><strong>Rating:</strong> {rating}/5</p>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default NewsCard;