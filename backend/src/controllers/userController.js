import db from "../db";
import User from '../models/user';


const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const docRef = await db.collection('users').add(data)
        res.status(200).send('User successfully created with profile: ' + docRef)
    } catch (error) {
        res.status(400).send(error.message);
    } next
};

export default {
    addUser
}