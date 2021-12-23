import { initializeApp } from 'firebase-admin';
import { getFirestore} from 'firebase-admin/firestore';
import config from '../config';

// Firebase Initialize
const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore();