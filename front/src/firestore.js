import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVN0HghGFTimlRLdIjMMrxNnyLVtvZnjo",
  authDomain: "review-production.firebaseapp.com",
  projectId: "review-production",
  storageBucket: "review-production.appspot.com",
  messagingSenderId: "762485479370",
  appId: "1:762485479370:web:0403ca191bf882c181a133"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }