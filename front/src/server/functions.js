import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { firestore } from '../firestore'
import axios from 'axios';

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
    const res = await axios.get('https://api.onebob.co/questions');
    
    return res.data;
  }

  export const addItem = async (userId, answers) => {

    console.log(userId, answers)
    answers.map(answer => {
      
      axios.post('https://api.onebob.co/questions/result', {
        userId: userId,
        consideration: answer?.consideration,
        reviewText: answer?.text,
        purchase: answer?.purchase,
        shipping: answer?.shipping,
        using: answer?.using,
        cs: answer?.service,
        none: answer?.none
      })
    })
    // const resp = await addDoc(resultRef, {
    //   userId: userId,
    //   result: answers,
    // });

    // console.log(resp);
  };

  export const complete = async (userId, code, task) => {
    const userDoc = doc(firestore, "users", userId);
    const completionRef = collection(firestore, "completion");

    axios.post('https://api.onebob.co/questions/complete', {
      task: task
    })

    const resp = await updateDoc(userDoc, {
      code: code
    });
    const resp2 = await addDoc(completionRef, {
      userId: userId,
      code: code
    })

    console.log(resp);
  }