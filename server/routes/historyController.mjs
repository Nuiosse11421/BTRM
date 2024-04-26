import express from 'express'
import AnswerHistory from '../models/AnswerModel.mjs'
import RoleHistory from '../models/RoleHistory.mjs'

const router = express.Router()

//http://localhost:8000/api/history
router.get('/history', async (req, res) => {
    try {
        const { userID } = req.query
        if (!userID) {
            return res.status(404).json({ message: 'user not Found' })
        }
        const HisRole = await RoleHistory.findOne({_id:userID})
        const HisAns = await AnswerHistory.findOne({_id:userID})
        const roleHistory = HisRole.roles
        roleHistory.sort((a,b)=> new Date(b.timestamp) - new Date(a.timestamp))
        const answerHistory = HisAns.history
        answerHistory.sort((a,b)=> new Date(b.timestamp)- new Date(a.timestamp))
        res.json({ answerHistory ,roleHistory})
    } catch (err) {
    }
})

export default router