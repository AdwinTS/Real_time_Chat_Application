// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI2D95_d1KQb7DK8kO-OlZHhJhYleVBCY",
  authDomain: "chatapp-1e44a.firebaseapp.com",
  projectId: "chatapp-1e44a",
  storageBucket: "chatapp-1e44a.firebasestorage.app",
  messagingSenderId: "163796146798",
  appId: "1:163796146798:web:edf0947d01a87b6af6247f",
  measurementId: "G-GDBMGDXE9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);