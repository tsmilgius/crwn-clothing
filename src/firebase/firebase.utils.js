import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA7LV1DzTWhVcML7zFF5gDbnlhsYlDAHLU",
  authDomain: "crwn-db-36b3c.firebaseapp.com",
  projectId: "crwn-db-36b3c",
  storageBucket: "crwn-db-36b3c.appspot.com",
  messagingSenderId: "162935950239",
  appId: "1:162935950239:web:da1c0ba6c641beb8930baa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;