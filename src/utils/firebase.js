// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9BcUruk3lc_LfBwR7O12mz8LVewBFLQ4",
    authDomain: "netflix-48add.firebaseapp.com",
    projectId: "netflix-48add",
    storageBucket: "netflix-48add.firebasestorage.app",
    messagingSenderId: "355804304483",
    appId: "1:355804304483:web:c4d35e80e09495e42c5456",
    measurementId: "G-RRHCZ101RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);