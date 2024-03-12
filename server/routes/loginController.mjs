import bcrypt from 'bcrypt'
import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import jwt from 'jsonwebtoken'
import mongoose from '../db.mjs'



const router = express.Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const profile = await Profile.findOne({_id: user._id })
        const token = jwt.sign({userId:user._id},'freedome',{expiresIn:'1h'})
        const { firstname, lastname, gender, date_of_birth } = user;
        const userData = {
            _id: user._id,
            email: user.email,
            firstname: profile.firstname,
            lastname:profile.lastname,
            gender: profile.gender,
            date_of_birth : profile.date_of_birth,
        };

        console.log('Login Successful')    
        res.status(200).json({token,user:userData})
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err: 'Internal server error' });
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error("Error destroying session : ", err)
            res.status(500).json({ error: 'Failed to logout' })
        }
        else {
            console.log('Logout Succesful')
            res.status(200).json({ message: "Logout sucessful" })
        }
    })
})
export default router