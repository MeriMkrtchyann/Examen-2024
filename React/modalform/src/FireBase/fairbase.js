
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAeE48Sa8hQP2ehk-bCAQ2JJp6h0YCjG6s",
  authDomain: "js-full-cours.firebaseapp.com",
  databaseURL: "https://js-full-cours-default-rtdb.firebaseio.com",
  projectId: "js-full-cours",
  storageBucket: "js-full-cours.appspot.com",
  messagingSenderId: "931575738503",
  appId: "1:931575738503:web:893dbe31edef648bd10822",
  measurementId: "G-CXZNYZ8T4Q"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);