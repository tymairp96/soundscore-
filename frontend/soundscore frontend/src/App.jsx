import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import EditReview from "./pages/EditReview";
import Spotlight from "./pages/Spotlight";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SoundScore
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Review
                </Link>
         
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/spotlight">
                  Spotlight
                </Link>
              </li>
            </ul>

            <span className="navbar-text ms-3">Post your review</span>
          </div>
        </div>
      </nav>

      <Routes>
        {/*H\ home page*/}
        <Route path="/" element={<Home />} />

        {/*/Add Review page */}
        <Route path="/add" element={<AddReview />} />
        {/* edit page */}
        <Route path="/edit/:id" element={<EditReview />} />
        {/* spotlight page */}
        <Route path="/spotlight" element={<Spotlight />} />
      </Routes>
    </Router>
  );
}

export default App;
