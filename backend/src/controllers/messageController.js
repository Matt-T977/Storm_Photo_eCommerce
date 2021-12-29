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
  next;
};

// Get All Messages for User
const getAllMessages = async (req, res, next) => {
  try {
    const { id } = req.params;
    const messages = await db
      .collection('users')
      .doc(id)
      .collection('messages');
    const data = await messages.get();
    const messagesArray = [];
    if (data.empty) {
      res.status(404).send('No Messages Found.');
    } else {
      data.forEach((doc) => {
        const message = new Message(
          doc.id,
          doc.data().sender,
          doc.data().receiver,
          doc.data().messageBody,
        );
        messagesArray.push(message);
      });
      res.send(messagesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};
