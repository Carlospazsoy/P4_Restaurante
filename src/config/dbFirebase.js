// instalas npm install firebase
// este import no viene en la configuracion 
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD0J8PpBMVF_e8OqfYP1JMIoqKwCKEJqPA",
  authDomain: "proyecto4-4cb6b.firebaseapp.com",
  projectId: "proyecto4-4cb6b",
  storageBucket: "proyecto4-4cb6b.appspot.com",
  messagingSenderId: "74315794550",
  appId: "1:74315794550:web:35d7e537cfffc18a5c3757"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db 