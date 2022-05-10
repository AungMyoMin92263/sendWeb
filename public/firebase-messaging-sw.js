// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config

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

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});