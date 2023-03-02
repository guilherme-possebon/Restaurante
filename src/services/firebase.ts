
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCsCyJr-4cS7WKN5MGcAYjZOxhjjemxfug",
  authDomain: "restaurante-60286.firebaseapp.com",
  projectId: "restaurante-60286",
  storageBucket: "restaurante-60286.appspot.com",
  messagingSenderId: "1037786042983",
  appId: "1:1037786042983:web:4390770d2a6a82bd5b3ac2",
  measurementId: "G-GBDTQ2RNWD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)