import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtx_G3HataquUrzqj_3o43KELNHy8Ye38",
  authDomain: "cl-prisma-tejidos.firebaseapp.com",
  projectId: "cl-prisma-tejidos",
  storageBucket: "cl-prisma-tejidos.appspot.com",
  messagingSenderId: "446906359228",
  appId: "1:446906359228:web:03486a29dad2d90c1b5fb9",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
