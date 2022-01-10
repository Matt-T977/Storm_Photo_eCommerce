import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./config";
import { getStorage } from "firebase/storage";

const APP = initializeApp(firebaseConfig);
const STORAGE = getStorage();

const firebase = {
  app: APP,
  storage: STORAGE,
};

export default firebase;
