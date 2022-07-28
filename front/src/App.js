import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Sample from "./pages/Sample";
import Sample2 from './pages/Sample2';
import Problem from "./pages/Problem";
import Completion from './pages/Completion';


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/sample2" element={<Sample2 />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </Router>
  );
}

export default App;
