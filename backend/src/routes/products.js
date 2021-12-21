import express from 'express';

const router = express.Router();

// Product List CRUD
router.get('/list', (req, res) => {
  res.send('products list');
});

router.post('/list', (req, res) => {
  res.send('posted new product');
});

// Individual Product CRUD
router.get('/{id}', (req, res) => {
  res.send('Get Individual Product');
});

router.put('/{id}', (req, res) => {
  res.send('Product Update');
});

router.delete('/{id}', (req, res) => {
  res.send('delete a product');
});

export default router;
