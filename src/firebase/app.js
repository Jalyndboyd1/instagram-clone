// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyACFOblNtEdnO55mmc7uogG_rEEO9rWuNc",
  authDomain: "instagram-clone-6ceb9.firebaseapp.com",
  projectId: "instagram-clone-6ceb9",
  storageBucket: "instagram-clone-6ceb9.appspot.com",
  messagingSenderId: "617674478858",
  appId: "1:617674478858:web:1e6d204e6420b557b096f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()