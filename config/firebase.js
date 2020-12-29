import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
  apiKey: "AIzaSyAq_KQwNZbtQxG-A0yvUeK4Ly41-7aX4d8",
  authDomain: "mentorpal-894e6.firebaseapp.com",
  projectId: "mentorpal-894e6",
  storageBucket: "mentorpal-894e6.appspot.com",
  messagingSenderId: "874785362525",
  appId: "1:874785362525:web:dc1fabd23598d5ce19b3b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export const authProvider = new firebase.auth.GoogleAuthProvider;

export const persistence = firebase.auth.Auth.Persistence.LOCAL;