// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IbgShaRhmi97Uka2HsKWFvmFdplfzWg",
  authDomain: "visazen-b62f7.firebaseapp.com",
  projectId: "visazen-b62f7",
  storageBucket: "visazen-b62f7.firebasestorage.app",
  messagingSenderId: "389496291480",
  appId: "1:389496291480:web:8cf62cb1c4f065fcadd0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);