import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

// Product List CRUD
router.get('/list', productController.getAllProducts);

router.post('/new', productController.addProduct);

// Individual Product CRUD
router.get('/:id', productController.getProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

export default router;
