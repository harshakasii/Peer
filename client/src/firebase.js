// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDN7fc1XW2Sj-Krf8AJNafDk5prB5wXo",
  authDomain: "peerdorm-839f7.firebaseapp.com",
  databaseURL: "https://peerdorm-839f7-default-rtdb.firebaseio.com",
  projectId: "peerdorm-839f7",
  storageBucket: "peerdorm-839f7.appspot.com",
  messagingSenderId: "59621925594",
  appId: "1:59621925594:web:b2277b46e634b17f0bfbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;