import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA81xA7uKi0w0UecN_TJ9tOOlfbpcYU44",

  authDomain: "big-fella-db.firebaseapp.com",

  projectId: "big-fella-db",

  storageBucket: "big-fella-db.appspot.com",

  messagingSenderId: "847060034848",

  appId: "1:847060034848:web:41698e2c4df94d0ad7e345",

  measurementId: "G-95DCNDLJ2J",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
