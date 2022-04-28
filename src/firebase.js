// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHswq-r5xID2TI-vIWSQn2XY08S_6A3is",
  authDomain: "send-bf6ba.firebaseapp.com",
  projectId: "send-bf6ba",
  storageBucket: "send-bf6ba.appspot.com",
  messagingSenderId: "638541331460",
  appId: "1:638541331460:web:11d8cd0ec426b639c40951",
  measurementId: "G-HP7062WY9C"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export default firebase
