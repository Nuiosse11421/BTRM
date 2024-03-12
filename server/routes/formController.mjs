import express from 'express';
import User from '../models/userModel.mjs';
import Profile from '../models/profileModel.mjs';
import AnswerModel from '../models/AnswerModel.mjs';
import { calculateRoles } from '../function/CalculateRoles.mjs';

const router = express.Router();
router.post('/submit', async (req, res) => {
    try {
        const { emails, Scored,timestamps} = req.body
        const user = await User.findOne({emails})
        const newAnswer = new AnswerModel({
            _id : user._id,
            Score : Scored,
            timestamps : timestamps
        })
        await newAnswer.save()
        res.status(201).send('Form Submitted')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error');
    }
});


export default router;