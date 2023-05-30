// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDItl_jqDmEYMo8KsqLG86_viE9YoM1hOw",
  authDomain: "students-client.firebaseapp.com",
  projectId: "students-client",
  storageBucket: "students-client.appspot.com",
  messagingSenderId: "91159813484",
  appId: "1:91159813484:web:fb38d0b237843818b2a749",
  measurementId: "G-GC5XGCKPJT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()