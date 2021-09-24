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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      }) 
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;