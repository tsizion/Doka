// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Ensure you import this for authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigA = {
  apiKey: "AIzaSyDlu1J2eikOnp3C-FYakenE1VqWi5iNkI0",
  authDomain: "b2bdelivery-b2b59.firebaseapp.com",
  projectId: "b2bdelivery-b2b59",
  storageBucket: "b2bdelivery-b2b59.appspot.com",
  messagingSenderId: "70368318617",
  appId: "1:70368318617:web:c6e454b257359948551408",
  measurementId: "G-KCWHMHX2JS",
};

const firebaseConfigB = {
  apiKey: "AIzaSyDz3nBbwvkQWFtcchlfAPKK7HYK4_TgwQs",
  authDomain: "mygift-b5759.firebaseapp.com",
  projectId: "mygift-b5759",
  storageBucket: "mygift-b5759.appspot.com",
  messagingSenderId: "838867465014",
  appId: "1:838867465014:web:3857604aae409f5fad7997",
};

// Initialize Firebase apps
const appA = initializeApp(firebaseConfigA); // Default app
const analytics = getAnalytics(appA); // Initialize analytics for default app

const appB = initializeApp(firebaseConfigB, "appB"); // Named secondary app

// Initialize Auth for the default app
const auth = getAuth(appA);
auth.languageCode = "it"; // Set language code to
