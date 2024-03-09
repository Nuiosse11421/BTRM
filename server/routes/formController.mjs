import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'

const router = express.Router()

router.post('/submitForm',async(req,res)=>{
    const formData = req.body
    try{
        console.log('Received form data: ', req.body)
    }
    catch(err){
        console.error('Error processing form data:', err)
        res.status(500).json({err:'Failed to process form data.'})
    }
})

export default router