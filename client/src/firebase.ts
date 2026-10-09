// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJGRRTaouDlo2H5YSUW3PYpT4MnDtItW8",
  authDomain: "portfolio-f333c.firebaseapp.com",
  projectId: "portfolio-f333c",
  storageBucket: "portfolio-f333c.firebasestorage.app",
  messagingSenderId: "1025594564390",
  appId: "1:1025594564390:web:bd1fbda059895c7c016be7",
  measurementId: "G-T21Q13JX8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);