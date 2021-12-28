import { firestore } from 'firebase-admin';
import db from '../db';
import User from '../models/user';

// Post Request
const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const docRef = await db.collection('users').add(data);
    res.status(200).send('User successfully created with profile: ' + docRef);
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

// Get All Users Request
const getAllUsers = async (req, res, next) => {
  try {
    const users = await db.collection('users');
    const data = await users.get();
    const usersArray = [];
    if (data.empty) {
      res.status(404).send('No users found.');
    } else {
      data.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().firstName,
          doc.data().lastName,
          doc.data().streetAddress,
          doc.data().city,
          doc.data().state,
          doc.data().zipCode,
          doc.data().phoneNumber,
          doc.data().orders,
        );
        usersArray.push(user);
      });
      res.send(usersArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await db.collection('users').doc(id);
    const data = await user.get();
    if (!data.exists) {
      res.status(404).send('This user does not exist.');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await db.collection('users').doc(id);
    await user.update(data);
    res.send('User profile Updated');
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
}

export default {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
};
