// import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';
import config from '../config';
import serviceAccount from '../serviceAccountKey.json';

// Firebase Initialize
// const firebaseApp = initializeApp(config.firebaseConfig);
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = getFirestore();

export default db;
