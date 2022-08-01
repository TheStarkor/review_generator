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
    const questionCnt = 20; // 랜덤으로 받아 올 문제 수수
    const cntArray = new Array(10000);
    cntArray.fill(0);

    const createRandIndex = (count, length) => {
      let randomIndexArray = []
      for (let i=0; i<count; i++) {   //check if there is any duplicate index
        let randomNum = Math.floor(Math.random() * length)
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum)
          cntArray[randomNum] += 1;
        } else { //if the randomNum is already in the array retry
          i--
        }
      }
      return randomIndexArray
    }

    // const col = collection(firestore, 'questions');
    // const questionSnapShot = await getDocs(col);
    // const questionLength = questionSnapShot.docs.length;
    const questionLength = 10000;
    const indexArray = createRandIndex(questionCnt, questionLength);
    console.log(indexArray);
    for(let j=0 ; j<500 ; j++){
      createRandIndex(questionCnt, questionLength);
    }
    console.log(cntArray);
    let zeroCnt = cntArray.reduce((cnt, element) => cnt + (element === 0), 0);
    let oneCnt = cntArray.reduce((cnt, element) => cnt + (element === 1), 0);
    let twoCnt = cntArray.reduce((cnt, element) => cnt + (element === 2), 0);
    let thrCnt = cntArray.reduce((cnt, element) => cnt + (element === 3), 0);
    let overCnt = cntArray.reduce((cnt, element) => cnt + (element > 3), 0);

    console.log(zeroCnt, oneCnt, twoCnt, thrCnt, overCnt);
    // const questionList = indexArray.map(idx => questionSnapShot.docs[idx].data());
    
    // console.log(questionList);
    // return questionList;
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