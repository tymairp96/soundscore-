import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard.jsx";
import { useNavigate } from "react-router-dom";



function Home() {
   
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
// grab reviews from the backend when the page loads 
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/reviews`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, []);
    //   delete a review 
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review")) return;
    try{
        await fetch(`${import.meta.env.VITE_API_URL}/reviews/${id}`, {
            method: "DELETE",
    });
    // 
    setReviews((prev) => prev.filter((rev) => rev._id !== id))
  } catch (err) {
    console.error("Error deleting review:", err);
  }
};

// Navigate to edit page
const handleEdit = (id) => navigate (`/edit/${id}`);
return (
    <div>
  <div className="review-header">
    <h1> Your Reviews </h1>
    <p>Total Reviews: {reviews.length}</p>
    </div>
    <div className="review-container">
      {reviews.map((rev) => (
        <ReviewCard
         key={rev._id}
         review={rev}
         onEdit={() => handleEdit(rev._id)}
         onDelete={() => handleDelete(rev._id)}
         />
      ))}
  </div>
  </div>
);
}


export default Home;



