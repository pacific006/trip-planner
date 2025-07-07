// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACKeM_G6RdFxhPyNMjfuMQIufutfJXuXw",
  authDomain: "ai-trip-planner-8d82a.firebaseapp.com",
  projectId: "ai-trip-planner-8d82a",
  storageBucket: "ai-trip-planner-8d82a.firebasestorage.app",
  messagingSenderId: "157813193967",
  appId: "1:157813193967:web:55dc0218dbeb8cbb0faf1a",
  measurementId: "G-F54T2B1YJH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
