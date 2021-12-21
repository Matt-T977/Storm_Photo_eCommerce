import express from 'express';

const router = express.Router();

// Product List CRUD
router.get('/product/list', (req, res) => {
  res.send('products list');
});

router.post('product/list', (req, res) => {
  res.send('posted new product');
});

// Individual Product CRUD
router.get('/product/{id}', (req, res) => {
  res.send('Get Individual Product');
});

router.put('/product/{id}', (req, res) => {
  res.send('Product Update');
});

router.delete('/product/{id}', (req, res) => {
  res.send('delete a product');
})
export default router;
