import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { firestore } from './firestore'

import Intro from "./pages/Intro";
import Sample from "./pages/Sample";
import Problem from "./pages/Problem";



function App() {
  const [userId, setUserId] = useState(null);
  const [questions, setQuesitons] = useState(null);

  const createUser = async () => {
    const userRef = collection(firestore, "users");

    const resp = await addDoc(userRef, {
      code: "",
      created_at: new Date()
    });

    console.log(resp.id);
    setUserId(resp.id);
  }

  const getQuestions = async () => {
    // 25개 랜덤으로 받아야함
    const col = collection(firestore, 'questions');
    const citySnapshot = await getDocs(col);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    console.log(cityList);
    setQuesitons(cityList);
  }

  const addItem = async () => {
    const resultRef = collection(firestore, "result");

    // 반복문으로 결과 돌면서 결과 저장
    const resp = await addDoc(resultRef, {
      userId: userId,
      result: [{
        cs: "ok"
      }, {
        cs: 'hihi'
      }]
    });

    console.log(resp);
  };

  const complete = async (code) => {
    const userDoc = doc(firestore, "users", userId);

    const resp = await updateDoc(userDoc, {
      code: code
    });

    console.log(resp);
  }

  useEffect(() => {
    createUser();
    getQuestions();
  }, [])

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Intro />} />
    //     <Route path="/sample" element={<Sample />} />
    //     <Route path="/problem" element={<Problem />} />
    //   </Routes>
    // </Router>
    <div className="App">
      안녕하세요
      <button onClick={addItem}>hi</button>
      <button onClick={() => complete('hihi')}>updateUser</button>
    </div>
  );
}

export default App;
