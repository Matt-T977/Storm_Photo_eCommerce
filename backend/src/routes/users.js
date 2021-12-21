import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

router.put('/', (req, res) => {
  res.send('Update User');
});

export default router;
