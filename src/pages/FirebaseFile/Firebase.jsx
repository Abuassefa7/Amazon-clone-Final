
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlWllAR1egpqvv1cqFd8kp10ci4GRZX-0",
  authDomain: "clone-82d21.firebaseapp.com",
  projectId: "clone-82d21",
  storageBucket: "clone-82d21.appspot.com",
  messagingSenderId: "876243863260",
  appId: "1:876243863260:web:159123b6dd631ec8705619",
  measurementId: "G-M6JKQZJRK8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db= firebaseApp.firestore();

export {auth,db};