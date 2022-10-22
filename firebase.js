// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAMBf8jYYNky39F8mp6KEksGtJJQlU5H8",
  authDomain: "clone2-14ccc.firebaseapp.com",
  projectId: "clone2-14ccc",
  storageBucket: "clone2-14ccc.appspot.com",
  messagingSenderId: "620447033022",
  appId: "1:620447033022:web:0f9922bdcdc5b64e9e20ef",
  measurementId: "G-SMG9ZXFLZM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
