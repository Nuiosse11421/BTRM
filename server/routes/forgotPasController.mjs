import express from 'express'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import User from '../models/userModel.mjs'

const router =express.Router()

router.post('/api/forgotPassword', async (req,res)=>{
    const {email} = req.body
    try {
        const rst = crypto.randomBytes(20).toString('hex')
        const rstExpiry = Date.now() + 3600000
        await User.update(
        {rst, rstExpiry},
        {where: {email}}
        )
        const trsp = nodemailer.createTransport({
            
        })
    }catch{

    }
})