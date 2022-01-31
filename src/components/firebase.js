import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvY5zeJk03UODYBLmA6rmONHbxQ-jr-nQ",
  authDomain: "react-js-a6a4a.firebaseapp.com",
  projectId: "react-js-a6a4a",
  storageBucket: "react-js-a6a4a.appspot.com",
  messagingSenderId: "224401342956",
  appId: "1:224401342956:web:1f804509fd325322bcc0c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);