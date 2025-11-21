import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import AddReview from "./pages/AddReview";
// import EditReview from "./pages/EditReview";
// import Spotlight from "./pages/Spotlight";


import './App.css'

function App() {
 

  return (
   <Router>
    <Routes>
      {/*H\ home page*/ }
      <Route path="/" element={<Home />} />
      
      {/*/Add Review page */}
      <Route path="/add" element={<AddReview />} />
    </Routes>
   </Router>
  )

};

export default App;

