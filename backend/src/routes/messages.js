import express from 'express';
import messageController from '../controllers/messageController';

const router = express.Router();

router.get('/list', messageController.getAllMessages);

router.get('/:userId/:messageId', messageController.getMessage);

export default router;
