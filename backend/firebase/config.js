const dotenv = require('dotenv')
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const envConfig = dotenv.config()

const firebaseConfig = {
    apiKey: envConfig.parsed.GOOGLE_KEY,
    authDomain: "instagram-clone-6ceb9.firebaseapp.com",
    projectId: "instagram-clone-6ceb9",
    storageBucket: "instagram-clone-6ceb9.appspot.com",
    messagingSenderId: "617674478858",
    appId: "1:617674478858:web:1e6d204e6420b557b096f3"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

module.exports = { auth }

console.log(envConfig)