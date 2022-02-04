import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBvERxgC9NWzUuUPWYN8TRBapjjMNf1N1Q",
  authDomain: "crwn-db-498ff.firebaseapp.com",
  projectId: "crwn-db-498ff",
  storageBucket: "crwn-db-498ff.appspot.com",
  messagingSenderId: "630933158629",
  appId: "1:630933158629:web:b92f3e00ae7d7066de320c",
  measurementId: "G-4Y9138FQXG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
