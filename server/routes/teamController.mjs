import express from 'express'
import Team from '../models/teamModel.mjs'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'

const router = express.Router()


router.post('/create-team',async(req,res)=>{
    const {teamname,creatorId,memberMail} = req.body
    try{
        const creator = await User.findOne({_id: creatorId})
        const members = await User.find({email:{$in:memberMail}})
        const team = new Team({
            teamname,
            creator: creator._id,
            members:members.map(member=>member._id)
        })
        const savedTeam = await team.save()
        res.status(200).json(savedTeam)
    }catch(err){
        console.error(err)
    }
})


export default router