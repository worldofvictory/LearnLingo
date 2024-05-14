import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

//const API_KEY = process.env.API_KEY;
const AUTHDOMAIN = process.env.DOMAIN;
const MESSAGINGSENDERID = process.env.MESSAGING_SENDER_ID;
const APPID = process.env.APP_ID;
const MEASUREMENTID = process.env.MEASUREMENT_ID;
const firebaseConfig = {
  apiKey: "AIzaSyBHIwW1HbsRMOxblg_vwyaMMxOfytuUXsE",
  authDomain: AUTHDOMAIN,
  databaseURL: "https://learn-lingo-167d4-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-167d4",
  storageBucket: "learn-lingo-167d4.appspot.com",
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase();