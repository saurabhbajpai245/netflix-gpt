// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVYFn7J-7thKFoOS-xH5W1UuR3UovWiHE",
  authDomain: "netflixgpt-cdfff.firebaseapp.com",
  projectId: "netflixgpt-cdfff",
  storageBucket: "netflixgpt-cdfff.appspot.com",
  messagingSenderId: "608291871495",
  appId: "1:608291871495:web:a3f9fd7f79e8d9a31983a2",
  measurementId: "G-PWLNQWVKLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();