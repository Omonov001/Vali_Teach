// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM-pSabvLBV4s3YTPr1WyMRjITgf7l6Gw",
  authDomain: "omonov-master.firebaseapp.com",
  projectId: "omonov-master",
  storageBucket: "omonov-master.firebasestorage.app",
  messagingSenderId: "606038945768",
  appId: "1:606038945768:web:95e02c6ec45afef1637e5d",
  measurementId: "G-E9RM985S2T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider()

export { auth, db , googleProvider};