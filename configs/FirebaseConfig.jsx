// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-generator-f1d5c.firebaseapp.com",
  projectId: "ai-logo-generator-f1d5c",
  storageBucket: "ai-logo-generator-f1d5c.firebasestorage.app",
  messagingSenderId: "991244335720",
  appId: "1:991244335720:web:354c391b241dd6834f59dd",
  measurementId: "G-90RXTLPR9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
