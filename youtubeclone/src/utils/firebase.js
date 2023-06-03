// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR21esqB7T6kxB7I3TiBxonIJHvqXy1Wc",
  authDomain: "video-sharingapp-31817.firebaseapp.com",
  projectId: "video-sharingapp-31817",
  storageBucket: "video-sharingapp-31817.appspot.com",
  messagingSenderId: "79332169623",
  appId: "1:79332169623:web:119226ebcfd3f7755196d2",
  measurementId: "G-48FEXPHM69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider()
export default app