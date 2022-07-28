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
    const questionCnt = 2; // 랜덤으로 받아 올 문제 수수

    const createRandIndex = (count, length) => {
      let randomIndexArray = []
      for (let i=0; i<count; i++) {   //check if there is any duplicate index
        let randomNum = Math.floor(Math.random() * length)
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum)
        } else { //if the randomNum is already in the array retry
          i--
        }
      }
      return randomIndexArray
    }

    const col = collection(firestore, 'questions');
    const questionSnapShot = await getDocs(col);
    const questionLength = questionSnapShot.docs.length;
    const indexArray = createRandIndex(questionCnt, questionLength);

    const questionList = indexArray.map(idx => questionSnapShot.docs[idx].data());
    
    console.log(questionList);
    return questionList;
  }

  export const addItem = async (userId, answers) => {
    const resultRef = collection(firestore, "result");

    // 반복문으로 결과 돌면서 결과 저장
    const resp = await addDoc(resultRef, {
      userId: userId,
      result: answers,
    });

    console.log(resp);
  };

  export const complete = async (userId, code) => {
    const userDoc = doc(firestore, "users", userId);
    const completionRef = collection(firestore, "completion");

    const resp = await updateDoc(userDoc, {
      code: code
    });
    const resp2 = await addDoc(completionRef, {
      userId: userId,
      code: code
    })

    console.log(resp);
  }