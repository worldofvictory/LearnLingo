import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const API_KEY = 'AIzaSyBHIwW1HbsRMOxblg_vwyaMMxOfytuUXsE';
const AUTHDOMAIN = process.env.AUTHDOMAIN;
const APPID = process.env.APPID;
const MEASUREMENTID = process.env.MEASUREMENTID;
const MESSAGINGSENDERID = process.env.MESSAGINGSENDERID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain:AUTHDOMAIN ,
  databaseURL: "https://learn-lingo-167d4-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-167d4",
  storageBucket: "learn-lingo-167d4.appspot.com",
  messagingSenderId: MESSAGINGSENDERID ,
  appId: APPID,
  measurementId:MEASUREMENTID, 
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase();