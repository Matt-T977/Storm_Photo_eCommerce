import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

/*Primary*/
router.get('/list', userController.getAllUsers);

router.get('/:id', userController.getUser);

router.post('/new', userController.addUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser)

export default router;
