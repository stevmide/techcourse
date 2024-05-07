// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDlMuaRXpwIzQRMLeSRT77FWDwf999FSQ",
  authDomain: "techcourse-45ced.firebaseapp.com",
  projectId: "techcourse-45ced",
  storageBucket: "techcourse-45ced.appspot.com",
  messagingSenderId: "709259352035",
  appId: "1:709259352035:web:08ee6957cb3a89982532d6"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
