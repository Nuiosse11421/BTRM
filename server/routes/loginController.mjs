import bcrypt from 'bcrypt'
import express from 'express'
import User from '../models/userModel.mjs'

const router = express.Router()

router.post('/api/checkUsertoLogin' , async (req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({where:{email}})
        const isValidP = await bcrypt.compare(password, user.password)
        if(!user){
            return res.status(401).json({error:"Invalid email or password"})
        }
        if(!isValidP){
            return res.status(401).json({error:"Invalid email or password"})
        }
        res.status(200).json('Login successful')
    }catch(err){
        console.error(err.message)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default router