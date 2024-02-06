import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqoC5qRz7f2kEtrRFnws328NJyEYf5OqA",
  authDomain: "planit-1-19c5a.firebaseapp.com",
  projectId: "planit-1-19c5a",
  storageBucket: "planit-1-19c5a.appspot.com",
  messagingSenderId: "292627831464",
  appId: "1:292627831464:web:1b4d471728650d210e809d",
};

export { firebaseConfig };
