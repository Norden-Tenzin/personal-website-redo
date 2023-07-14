// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl6xFSZOXDjY50fgXCp2kLYnCrbavA4Jg",
  authDomain: "personal-website-3e90d.firebaseapp.com",
  databaseURL: "https://personal-website-3e90d.firebaseio.com",
  projectId: "personal-website-3e90d",
  storageBucket: "personal-website-3e90d.appspot.com",
  messagingSenderId: "264162876341",
  appId: "1:264162876341:web:c36037c3f35dec9749d7fc",
  measurementId: "G-GRPJWZD2PZ",
};

// firebase.initializeApp(firebaseConfig);
// export default firebase;

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

// Use these for db & auth
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
