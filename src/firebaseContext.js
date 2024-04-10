import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl-J9jf7ifvrEW8-NYMj2nTn3cf75SgkA",
    authDomain: "portfolio-2709.firebaseapp.com",
    projectId: "portfolio-2709",
    storageBucket: "portfolio-2709.appspot.com",
    messagingSenderId: "831682010462",
    appId: "1:831682010462:web:9e774cd84b0428625183cf",
    measurementId: "G-7ZYX32PD3T"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);