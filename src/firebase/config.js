// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmoohtLgicK_HjR7_hkyhPT7S6B5KF49Y",
  authDomain: "stupidblog-deecc.firebaseapp.com",
  projectId: "stupidblog-deecc",
  storageBucket: "stupidblog-deecc.appspot.com",
  messagingSenderId: "1055370215717",
  appId: "1:1055370215717:web:e277ddd1d3da1377c91acc",
  measurementId: "G-87YBFJC6MH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export { analytics };
