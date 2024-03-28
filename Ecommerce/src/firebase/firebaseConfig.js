/*eslint-disable*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPzMIj-vf6EjqhB7HO9MpZHE-cikLsd3E",
  authDomain: "ecommerce-37663.firebaseapp.com",
  projectId: "ecommerce-37663",
  storageBucket: "ecommerce-37663.appspot.com",
  messagingSenderId: "251648353891",
  appId: "1:251648353891:web:15d9ae7c7bdfe60e58fa56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth= getAuth(app);
