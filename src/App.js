import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./MainPages/login";
import SignUP from "./MainPages/signup";
import Home from "./MainPages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
