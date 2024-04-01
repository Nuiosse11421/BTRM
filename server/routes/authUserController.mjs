import express from 'express'
import Profile from '../models/profileModel.mjs'

const router = express.Router()


router.get('/get-name',async(req,res)=>{
    const {userID} = req.query
    try{
        const profiles = await Profile.findOne({_id:userID})
        const name = {
            currentName : profiles.firstname + ' ' + profiles.lastname
        }
        res.json(name)
    }catch(err){

    }
})

export default router