// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBV3EjYkaVd-qZumeFXJrNh815SzpZC88",
  authDomain: "fir-8ab50.firebaseapp.com",
  projectId: "fir-8ab50",
  storageBucket: "fir-8ab50.appspot.com",
  messagingSenderId: "419738102833",
  appId: "1:419738102833:web:4da77c113508935944f910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);