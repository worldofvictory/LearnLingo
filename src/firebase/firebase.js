// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHIwW1HbsRMOxblg_vwyaMMxOfytuUXsE",
  authDomain: "learn-lingo-167d4.firebaseapp.com",
  databaseURL: "https://learn-lingo-167d4-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-167d4",
  storageBucket: "learn-lingo-167d4.appspot.com",
  messagingSenderId: "887447598415",
  appId: "1:887447598415:web:3069a0a8a0bd7f7cc6013a",
  measurementId: "G-2TE579NL7D"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase();