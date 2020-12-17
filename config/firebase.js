import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyCqEEgf4FB4Y1O4yotP0sZIDMy2bM3QvtA",
    authDomain: "mentorpal-app.firebaseapp.com",
    projectId: "mentorpal-app",
    storageBucket: "mentorpal-app.appspot.com",
    messagingSenderId: "467950197377",
    appId: "1:467950197377:web:77c9b22a35daed502e0b80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();