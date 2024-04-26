import bcrypt from 'bcrypt'
import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import jwt from 'jsonwebtoken'
import mongoose from '../db.mjs'



const router = express.Router()
const tokenBlacklist = new Set()
router.post('/login', async (req, res) => {
    try {
        const {email,password} =req.body
        const user = await User.findOne({email})
        const hashPassword = await bcrypt.hash(password, 10)
        if(!user){
            return res.json({message : "user not found"})
        }
        const isPassword = await bcrypt.compare(password, hashPassword)
        if(!isPassword){
            return res.json({message :'Ivalid email or password'})
        }
        const token = jwt.sign({id:user._id},'secret')
        res.json({token,userID:user._id})
    }catch(err){

    }
})

router.post('/logout', (req, res) => {
    const token = req.headers.authorization
    if(!token){return res.status(401).json({error:'No token provided'})}
    tokenBlacklist.add(token)
    res.status(200).json({ message: 'Logged out successfully' });
})
export default router