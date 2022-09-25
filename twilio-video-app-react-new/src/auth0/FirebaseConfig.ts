// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHkbz31pguiMGiR77UVxFDqcksF0Yz1Ms",
    authDomain: "learning-e074c.firebaseapp.com",
    projectId: "learning-e074c",
    storageBucket: "learning-e074c.appspot.com",
    messagingSenderId: "609532900844",
    appId: "1:609532900844:web:7636dc45b7b5e025293cc9",
    measurementId: "G-RK7NRXH92V"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// export const storage = getStorage(app);