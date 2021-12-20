import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFGRhhmT5YiazmOcmM1HO68K8F1HNh3PI",
  authDomain: "fipugram-6a9bb.firebaseapp.com",
  projectId: "fipugram-6a9bb",
  storageBucket: "fipugram-6a9bb.appspot.com",
  messagingSenderId: "735746493628",
  appId: "1:735746493628:web:6b53551a1e44336308d4b9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export { getAuth };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { onAuthStateChanged };
export { signOut };
