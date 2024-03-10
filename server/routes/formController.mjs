import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import AnswerModel from '../models/AnswerModel.mjs';

const router = express.Router()
const authenticateUser = async (req, res, next) => {
    try {
        // Extract JWT token from the Authorization header
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Missing token' });
        }

        // Verify and decode the JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user data from the database based on the user ID in the token
        const user = await User.findById(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
const calculateRoles = (formData) => {
    const {
        a1, a2, a3, a4, a5, a6, a7,
        b1, b2, b3, b4, b5, b6, b7,
        c1, c2, c3, c4, c5, c6, c7,
        d1, d2, d3, d4, d5, d6, d7,
        e1, e2, e3, e4, e5, e6, e7,
        f1, f2, f3, f4, f5, f6, f7,
        g1, g2, g3, g4, g5, g6, g7,
        h1, h2, h3, h4, h5, h6, h7,
        i1, i2, i3, i4, i5, i6, i7
    } = formData;

    const IM = h1 + a2 + i3 + e4 + b5 + g6 + e7;
    const CO = d1 + b2 + a3 + i4 + f5 + d6 + g7;
    const SH = g1 + f2 + c3 + c4 + d5 + h6 + a7;
    const PL = c1 + h2 + d3 + f4 + h5 + d6 + f7;
    const RI = a1 + d2 + f3 + h4 + e5 + i6 + d7;
    const ME = i1 + e2 + h3 + d4 + a5 + f6 + b7;
    const TW = b1 + g2 + e3 + a4 + c5 + c6 + i7;
    const CF = e1 + i2 + b3 + g4 + g5 + e6 + c7;
    const SP = f1 + c2 + g3 + b4 + i5 + a6 + h7;

    return { IM, CO, SH, PL, RI, ME, TW, CF, SP };
};
router.post('/submitForm',authenticateUser, async (req, res) => {
    const formData = req.body
    try {
        console.log('Received form data: ', formData)
        await saveAnswerHistory(formData, req.user._id)
        console.log('Saved data')
    }
    catch (err) {
        console.error('Error processing form data:', err)
        res.status(500).json({ err: 'Failed to process form data.' })
    }
})

const saveAnswerHistory = async (formData, userId) => {
    try {
        const answer = new AnswerModel({
            Score: formData,
            timestamp: new Date(),
        })
        await answer.save()
        const roles = calculateRoles(formData);
        await Profile.findOneAndUpdate({ _id: userId }, { roles });
        const roleHistory = new RoleHistory({
            _id: userId,
            roles,
            timestamp: new Date(),
        });
        await roleHistory.save();
    } catch (err) {
        console.error('Error saving answer history:', err);
        throw error;
    }
}
export default router