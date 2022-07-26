import { useEffect, useState } from 'react';
import { firestore } from './firestore'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';


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
    const col = collection(firestore, 'questions');
    const citySnapshot = await getDocs(col);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    setQuesitons(cityList);
  }

  const addItem = async () => {
    const resultRef = collection(firestore, "result");

    // 반복문으로 결과 돌면서 결과 저장
    const resp = await addDoc(resultRef, {
      userId: userId,
      result: {
        cs: "ok"
      }
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
    <div className="App">
      안녕하세요
      <button onClick={addItem}>hi</button>
      <button onClick={() => complete('hihi')}>updateUser</button>
    </div>
  );
}

export default App;
