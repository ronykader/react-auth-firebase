import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseConfig = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebaseConfig;
