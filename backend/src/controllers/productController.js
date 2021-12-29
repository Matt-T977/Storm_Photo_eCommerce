import { firestore } from 'firebase-admin';
import products from '../../dist/routes/products';
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

// Get All Products
const getAllProducts = async (req, res, next) => {
  try {
    const products = await db.collection('products');
    const data = await products.get();
    const productsArray = [];
    if (data.empty) {
      res.status(404).send('No Products Found');
    } else {
      data.forEach((doc) => {
        const product = new Product(
          doc.id,
          doc.data().imageURI,
          doc.data().name,
          doc.data().type,
          doc.data().resolution,
          doc.data().description,
          doc.data().price,
        );
        productsArray.push(product);
      });
      res.send(productsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = db.collection('products').doc(id);
    const data = await product.get();
    if (!data.exists) {
      res.status(404).send('No product Found');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

export default {
  addProduct,
  getAllProducts,
  getProduct,
};
