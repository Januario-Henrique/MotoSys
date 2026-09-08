import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtkx_RDk3jHS86RcXUafKr439VKx5l3rI",
  authDomain: "motosys-af8a3.firebaseapp.com",
  projectId: "motosys-af8a3",
  storageBucket: "motosys-af8a3.firebasestorage.app",
  messagingSenderId: "641772290401",
  appId: "1:641772290401:web:9cc95c2a50ffdb0459c520",
  measurementId: "G-RFXSP145S8",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);