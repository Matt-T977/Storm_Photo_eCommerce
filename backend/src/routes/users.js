import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

/*Primary*/
router.get('/list', userController.getAllUsers);

router.get('/:id', userController.getUser);

router.post('/', userController.addUser);

router.put('/', (req, res) => {
  res.send('Update User');
});

export default router;
