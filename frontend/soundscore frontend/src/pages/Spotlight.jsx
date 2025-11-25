import {useEffect, useState} from "react";
import NewsCard from "../components/NewsCard.jsx";

function Spotlight () {
    const [spotlightReview, setSpotlightReview] = useState(null);

    useEffect(() => {
        const fetchSpotlight = async () => {
            try {
                const res = await fetch (`${import.meta.env.VITE_API_URL}/reviews`);
                const data = await res.json();

                if(data.length > 0) {
                    // Spotlight is the highest rated review
                    const topReview = data.reduce((prev, current) => 
                        current.rating > prev.rating ? current : prev
                    );
                    setSpotlightReview(topReview);
                }
            } catch(err) {
                console.error("Error fetching spotlight review:" , err);
            }
        };
        fetchSpotlight();
    }, []);
    if(!spotlightReview) return <p>Loading spotlight review...</p>;

    return(
        <div>
            <h1>Spotlight</h1>
            <NewsCard review={spotlightReview} />
        </div>
    );
}


export default Spotlight;