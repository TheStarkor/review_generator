import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8wfaWr1FRxtsl6y_x_-hMzyWhD-TqDY",
  authDomain: "review-generator-98bb9.firebaseapp.com",
  projectId: "review-generator-98bb9",
  storageBucket: "review-generator-98bb9.appspot.com",
  messagingSenderId: "176083074957",
  appId: "1:176083074957:web:192485c5d80659ea7bc7c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }