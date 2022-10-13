// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNgKP-ifW-nQqyctW14wOw0PZo26sM1Ds",
  authDomain: "to-do-fa092.firebaseapp.com",
  projectId: "to-do-fa092",
  storageBucket: "to-do-fa092.appspot.com",
  messagingSenderId: "356196826888",
  appId: "1:356196826888:web:f600cae6985d7ceebc36bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
