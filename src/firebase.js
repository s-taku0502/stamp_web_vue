// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX-MwBvHlOe8hKVWFq4CrisV0MKUHwJfY",
  authDomain: "kanazawa-nuka2024.firebaseapp.com",
  projectId: "kanazawa-nuka2024",
  storageBucket: "kanazawa-nuka2024.firebasestorage.app",
  messagingSenderId: "729877460278",
  appId: "1:729877460278:web:3e388b308f1d6ad0192f97",
  measurementId: "G-WZ2GHT12EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);