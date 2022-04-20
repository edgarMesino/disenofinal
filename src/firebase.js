// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzpK17emkfYfULcuo3qGKj0e_LLMGxIzY",
  authDomain: "proyecto3-67c9a.firebaseapp.com",
  projectId: "proyecto3-67c9a",
  storageBucket: "proyecto3-67c9a.appspot.com",
  messagingSenderId: "560731605513",
  appId: "1:560731605513:web:67927a608a3ea94dca06d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docs = doc;
export const firestore = getFirestore;
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
