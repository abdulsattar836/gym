import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./MainPages/login";
import SignUP from "./MainPages/signup";
import Home from "./MainPages/Home";
import CardSection from "./pages/CardSection";
import TrainersSection from "./pages/TrainerSection";
import TestimonialsCarousel from "./pages/testmoinalSection";
import CTA from "./pages/CTA";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/service" element={<CardSection />} />
          <Route path="/trainers" element={<TrainersSection />} />
          <Route path="/testimonial" element={<TestimonialsCarousel />} />
          <Route path="/contactus" element={<CTA />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
