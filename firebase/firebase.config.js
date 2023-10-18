
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsVriztwGk1cugci-2suaFVY1zaKiMHBg",
  authDomain: "userdata-dcd44.firebaseapp.com",
  projectId: "userdata-dcd44",
  storageBucket: "userdata-dcd44.appspot.com",
  messagingSenderId: "315970092730",
  appId: "1:315970092730:web:4c1e14645b376a46598c83",
  measurementId: "G-KPP03JLJMJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore()