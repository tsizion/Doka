import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz3nBbwvkQWFtcchlfAPKK7HYK4_TgwQs",
  authDomain: "mygift-b5759.firebaseapp.com",
  projectId: "mygift-b5759",
  storageBucket: "mygift-b5759.appspot.com",
  messagingSenderId: "838867465014",
  appId: "1:838867465014:web:3857604aae409f5fad7997",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
auth.languageCode = "it";

export { firebaseApp, auth };
