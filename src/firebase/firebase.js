// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW4UAHUISLLPjMUbXX8slBw-HA6ogKolU",
  authDomain: "email-pass-authenticatio-87e0a.firebaseapp.com",
  projectId: "email-pass-authenticatio-87e0a",
  storageBucket: "email-pass-authenticatio-87e0a.appspot.com",
  messagingSenderId: "188607139979",
  appId: "1:188607139979:web:0d0dbf905bf00008a5448e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;