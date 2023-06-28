import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv8fw1ClDcZmfUlhMtYGi5he_8XsdwfyA",
  authDomain: "ngo-s-website.firebaseapp.com",
  projectId: "ngo-s-website",
  storageBucket: "ngo-s-website.appspot.com",
  messagingSenderId: "491414794133",
  appId: "1:491414794133:web:ddd9dfe73c3f5b6f8a109c",
  measurementId: "G-WDENK891TZ"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);