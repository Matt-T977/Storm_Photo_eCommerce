// import { initializeApp } from 'firebase-admin/app';
// eslint-disable-next-line import/no-unresolved
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';
import config from '../config';
import serviceAccount from '../serviceAccountKey.json';

// Firebase Initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  config: config.firebaseConfig,
});
const db = getFirestore();

export default db;
