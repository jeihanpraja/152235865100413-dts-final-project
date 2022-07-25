import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSktJqWuP73lxZ-ntIjXKm8UW50bN2zjc",
  authDomain: "dts-final-project-jeihan.firebaseapp.com",
  projectId: "dts-final-project-jeihan",
  storageBucket: "dts-final-project-jeihan.appspot.com",
  messagingSenderId: "161686283259",
  appId: "1:161686283259:web:6fc1fca2888c13f568215e",
};

//initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const registerEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user.email);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
};

const loginEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user.email);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export { auth, registerEmailPassword, loginEmailPassword, logOut };
