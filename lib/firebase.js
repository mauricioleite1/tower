// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIO6GjfjjlTxB-Mf9Y-wvlgDDPV311uCk",
  authDomain: "tower-9697d.firebaseapp.com",
  projectId: "tower-9697d",
  storageBucket: "tower-9697d.appspot.com",
  messagingSenderId: "838951303184",
  appId: "1:838951303184:web:a6bf9f3de2d2f8a9dbf295",
  measurementId: "G-5W9JHQFDXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);