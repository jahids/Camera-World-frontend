import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inisialaization = () => {

   initializeApp(firebaseConfig);
}

export default inisialaization;
