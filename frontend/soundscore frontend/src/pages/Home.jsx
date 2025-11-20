import {useEffect, useState} from "react";

function Home () {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch ("http://localhost:5000/reviews");
                const data = await res.json();
                setReviews(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchReviews();
    }, []);
    return (
        <div>
            <h1> </h1>
            <p></p>
        </div>
    )

};


export default Home;
