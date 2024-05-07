// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHumbPL6n3LRhdwFGtDjEwpck4Xyxrwi4",
  authDomain: "seniorproject-22f8e.firebaseapp.com",
  projectId: "seniorproject-22f8e",
  storageBucket: "seniorproject-22f8e.appspot.com",
  messagingSenderId: "329201109925",
  appId: "1:329201109925:web:94e97e76f933ad817df64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const imageDb = getStorage(app);