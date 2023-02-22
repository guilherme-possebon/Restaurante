// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsCyJr-4cS7WKN5MGcAYjZOxhjjemxfug",
  authDomain: "restaurante-60286.firebaseapp.com",
  projectId: "restaurante-60286",
  storageBucket: "restaurante-60286.appspot.com",
  messagingSenderId: "1037786042983",
  appId: "1:1037786042983:web:4390770d2a6a82bd5b3ac2",
  measurementId: "G-GBDTQ2RNWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);