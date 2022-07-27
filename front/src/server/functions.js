import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { firestore } from '../firestore'

  export const createUser = async () => {
    const userRef = collection(firestore, "users");

    const resp = await addDoc(userRef, {
      code: "",
      created_at: new Date()
    });

    console.log(resp.id);
    return resp.id;
  }

  export const getQuestions = async () => {
    // 25개 랜덤으로 받아야함
    const col = collection(firestore, 'questions');
    const citySnapshot = await getDocs(col);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    console.log(cityList);
    return cityList;
  }

  export const addItem = async (userId) => {
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

  export const complete = async (userId, code) => {
    const userDoc = doc(firestore, "users", userId);

    const resp = await updateDoc(userDoc, {
      code: code
    });

    console.log(resp);
  }