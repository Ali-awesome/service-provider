// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjcTMRoyumC2rWrKltLG0SGUe6iH7XL2Y",
    authDomain: "highking.firebaseapp.com",
    projectId: "highking",
    storageBucket: "highking.appspot.com",
    messagingSenderId: "420801967571",
    appId: "1:420801967571:web:f8a1b057e83f083a206b26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
