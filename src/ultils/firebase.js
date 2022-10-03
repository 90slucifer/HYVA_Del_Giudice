import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOaKHLXb8q-TnjbgGBU9aedc3-QpKJbt8",
  authDomain: "hyva-del-giudice.firebaseapp.com",
  projectId: "hyva-del-giudice",
  storageBucket: "hyva-del-giudice.appspot.com",
  messagingSenderId: "204904443323",
  appId: "1:204904443323:web:ee5855d4b7d442db19a89e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)