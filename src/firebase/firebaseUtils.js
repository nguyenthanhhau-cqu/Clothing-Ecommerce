import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADJqp3_tQo-jpWTLi8n-X-iq7_IOwpjL0",
  authDomain: "clothing-application-ea471.firebaseapp.com",
  projectId: "clothing-application-ea471",
  storageBucket: "clothing-application-ea471.appspot.com",
  messagingSenderId: "1022488208098",
  appId: "1:1022488208098:web:34e17a03589369761db4bb",
  measurementId: "G-CW21ZZ0QM0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
