import { firestore } from 'firebase-admin';
import db from '../db';
import Product from '../models/product';

// Post Request
const addProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const docRef = await db.collection('products').add(data);
    res.status(200).send(`Product Successfully Added: ${docRef}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};
