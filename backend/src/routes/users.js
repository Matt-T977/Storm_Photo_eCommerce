import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

/*Primary*/
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', userController.addUser);

router.put('/', (req, res) => {
  res.send('Update User');
});

export default router;
