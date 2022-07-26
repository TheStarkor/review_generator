import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Sample from "./pages/Sample";
import Problem from "./pages/Problem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </Router>
  );
}

export default App;
