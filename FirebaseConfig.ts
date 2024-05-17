// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJZPiWMVa6oigkTKVFMACAxFnATqp9cxg",
  authDomain: "buynsell-e6996.firebaseapp.com",
  projectId: "buynsell-e6996",
  storageBucket: "buynsell-e6996.appspot.com",
  messagingSenderId: "920841458274",
  appId: "1:920841458274:web:c3b073f29f789a7be7b73b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);