import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIO6GjfjjlTxB-Mf9Y-wvlgDDPV311uCk",
  authDomain: "tower-9697d.firebaseapp.com",
  projectId: "tower-9697d",
  storageBucket: "tower-9697d.appspot.com",
  messagingSenderId: "838951303184",
  appId: "1:838951303184:web:a6bf9f3de2d2f8a9dbf295",
  measurementId: "G-5W9JHQFDXB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
