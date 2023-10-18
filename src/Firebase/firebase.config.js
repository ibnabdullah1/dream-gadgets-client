// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbp5gTLTilziEaSZTbMYNLXTStaojbHBU",
  authDomain: "dream-gadgets.firebaseapp.com",
  projectId: "dream-gadgets",
  storageBucket: "dream-gadgets.appspot.com",
  messagingSenderId: "667009701553",
  appId: "1:667009701553:web:b7366f7af9daf432f5f490",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
