// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArihf0fSmg_-9w7U_sT1aK2BuvvVexDKA",
  authDomain: "eshop-76799.firebaseapp.com",
  projectId: "eshop-76799",
  storageBucket: "eshop-76799.appspot.com",
  messagingSenderId: "986953259284",
  appId: "1:986953259284:web:bbbcad43943bef30248a01"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 //Initialize Auth
 export const auth = getAuth(app);

 //Google sign in provider

 export const provider = new GoogleAuthProvider();
 provider.setCustomParameters({
  prompt: "select_account"
});

 export default app;