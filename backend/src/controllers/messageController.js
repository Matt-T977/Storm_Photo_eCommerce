import db from '../db';
import Message from '../models/message';

// Post Request
const addMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await db.collection('users').doc(id);
    await db.collection('users').doc(user.id).collection('messages').add(data);
    res.status(200).send(`Message Successfully sent to ${user.firstName}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
