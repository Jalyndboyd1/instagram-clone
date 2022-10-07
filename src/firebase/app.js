// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import axios from "../utils/axios"

async function getConfig() {
  await axios.get('/firebase_config')
    .then((res) => console.log(res.data))
}

// Initialize Firebase
const app = initializeApp(getConfig());
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider()