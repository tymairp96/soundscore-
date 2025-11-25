SoundScore

-SoundScore is a simple full-stack music review app. Users can add reviews for songs or albums, view all reviews, edit them, delete them, and check out the Spotlight page, which shows the highest-rated review.

-What the App Does

View all reviews on the home page

Add a new review with artist name, album, song, rating, and comment

Edit or delete any review

Automatically highlight the highest-rated review in the Spotlight section

-Tech Used
Frontend

React (Vite)

React Router

Bootstrap

Custom CSS

Backend

Node.js + Express

MongoDB + Mongoose

REST API (GET, POST, PUT, DELETE)



Environment variable: VITE_API_URL
Used so the frontend can switch between local and deployed backend URLs without hardcoding them.

-How It Works 

The frontend uses fetch() to call backend endpoints.

The backend communicates with MongoDB using Mongoose.

The backend returns JSON, and React updates the UI with useState/useEffect.

Spotlight uses .reduce() to pick the highest-rated review automatically.