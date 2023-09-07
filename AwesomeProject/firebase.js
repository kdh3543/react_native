// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW321GaJhivUjM9-2rs1okVmGk6YXo1Mo",
  authDomain: "react-native-todo-app-269fe.firebaseapp.com",
  projectId: "react-native-todo-app-269fe",
  storageBucket: "react-native-todo-app-269fe.appspot.com",
  messagingSenderId: "617158080403",
  appId: "1:617158080403:web:4c947d71d309877e265a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
