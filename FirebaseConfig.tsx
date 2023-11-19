import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZsKvW9k4wEqReER8UfE5INHzEbm_9D5I",
  authDomain: "planit-54d0b.firebaseapp.com",
  projectId: "planit-54d0b",
  storageBucket: "planit-54d0b.appspot.com",
  messagingSenderId: "873482784926",
  appId: "1:873482784926:web:88ee857d17153c384cab8f",
  measurementId: "G-2NKB0Q5HZW",
};

export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App);
export const Firebase_DB = getFirestore(Firebase_App);
