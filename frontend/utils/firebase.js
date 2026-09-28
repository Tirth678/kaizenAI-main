// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kaizenai-53c43.firebaseapp.com",
  projectId: "kaizenai-53c43",
  storageBucket: "kaizenai-53c43.firebasestorage.app",
  messagingSenderId: "511359555556",
  appId: "1:511359555556:web:f3d6b963ec3efbf19619f1",
  measurementId: "G-SC8QWKQ8QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);