import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5yIpk25zNzFXNswhmDaaOttA1ZPOJIwY",
  authDomain: "form-34123.firebaseapp.com",
  projectId: "form-34123",
  storageBucket: "form-34123.appspot.com",
  messagingSenderId: "1032077401564",
  appId: "1:1032077401564:web:35860d18be6ca9f7d0c319",
  measurementId: "G-JK40D953VX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
