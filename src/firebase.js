import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuUXWc_T1zabLoqvN-KJhbyRW-_9HzsJE",
  authDomain: "icpl-platform.firebaseapp.com",
  projectId: "icpl-platform",
  storageBucket: "icpl-platform.appspot.com",
  messagingSenderId: "1059995168888",
  appId: "1:1059995168888:web:11b63b6fbdef23e8a3d8d",
  measurementId: "G-N7B8T37FM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore for database usage
export const db = getFirestore(app);