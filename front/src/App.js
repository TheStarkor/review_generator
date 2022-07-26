import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Intro from "./pages/Intro";
import Sample from "./pages/Sample";
import Sample2 from './pages/Sample2';
import Tutorial from './pages/Tutorial';
import Problem from "./pages/Problem";
import Completion from './pages/Completion';
import Finish from './pages/Finish';


function App() {
  useEffect(()=>{
    document.title = "Sentence Labeling"
  });

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/sample2" element={<Sample2 />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
  );
}

export default App;
