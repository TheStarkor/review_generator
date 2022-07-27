import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Sample from "./pages/Sample";
import Sample2 from './pages/Sample2';
import Problem from "./pages/Problem";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/sample2" element={<Sample2 />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </Router>
    // <div className="App">
    //   안녕하세요
    //   <button onClick={addItem}>hi</button>
    //   <button onClick={() => complete('hihi')}>updateUser</button>
    // </div>
  );
}

export default App;
