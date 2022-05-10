import firebase from 'firebase/app';
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "FROM FIREBASE CONSOLE",
//   authDomain: "FROM FIREBASE CONSOLE",
//   databaseURL: "FROM FIREBASE CONSOLE",
//   projectId: "FROM FIREBASE CONSOLE",
//   storageBucket: "FROM FIREBASE CONSOLE",
//   messagingSenderId: "FROM FIREBASE CONSOLE",
//   appId: "FROM FIREBASE CONSOLE",
//   measurementId: "FROM FIREBASE CONSOLE",
// };

const firebaseConfig = {
    apiKey: "AIzaSyBHswq-r5xID2TI-vIWSQn2XY08S_6A3is",
    authDomain: "send-bf6ba.firebaseapp.com",
    databaseURL: "https://send-bf6ba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "send-bf6ba",
    storageBucket: "send-bf6ba.appspot.com",
    messagingSenderId: "638541331460",
    appId: "1:638541331460:web:11d8cd0ec426b639c40951",
    measurementId: "G-HP7062WY9C"
  };

firebase.initializeApp({
    apiKey: "AIzaSyBHswq-r5xID2TI-vIWSQn2XY08S_6A3is",
    authDomain: "send-bf6ba.firebaseapp.com",
    databaseURL: "https://send-bf6ba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "send-bf6ba",
    storageBucket: "send-bf6ba.appspot.com",
    messagingSenderId: "638541331460",
    appId: "1:638541331460:web:11d8cd0ec426b639c40951",
    measurementId: "G-HP7062WY9C"
  });

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });