import express from 'express';
import RoleHistory from '../models/RoleHistory.mjs';
import Profile from '../models/profileModel.mjs';
import AnswerModel from '../models/AnswerModel.mjs';
import { calculateRoles } from '../function/CalculateRoles.mjs';

const router = express.Router();
router.post('/submit', async (req, res) => {
    const { formData, userID } = req.body
    const rolesCal = calculateRoles(formData)
    console.log(rolesCal)
    try {
        const answerHistory = await AnswerModel.findById(userID)
        const roleHistory =await RoleHistory.findById(userID)
        roleHistory.roles.push({
            rolesed:rolesCal,
            timestamp: new Date()
        })
        const profileUser = await Profile.findOneAndUpdate(
            { _id: userID },
            { $set: { roles: rolesCal } },
            { new: true })
        answerHistory.history.push({
            Score: formData,
            timestamp: new Date()
        })
        await roleHistory.save()
        await answerHistory.save()
        res.json({message: "form submitted sucessfully!"})
    } catch (err) {
        console.error(err)

    }
});
export default router;