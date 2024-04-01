import express from 'express'
import Team from '../models/teamModel.mjs'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'

const router = express.Router()


router.post('/create-team', async (req, res) => {
    const { teamname, creatorId, memberMail } = req.body
    try {
        const creator = await User.findOne({ _id: creatorId })
        const members = await User.find({ email: { $in: memberMail } })
        const team = new Team({
            teamname,
            creator: creator._id,
            members: members.map(member => member._id)
        })
        const savedTeam = await team.save()
        res.status(200).json(savedTeam)
    } catch (err) {
        console.error(err)
    }
})

//http://localhost:8000/api/team-details
router.get('/team-details', async (req, res) => {
    try {
        const {creatorId} = req.query
        const teamDetails = await Team.findOne({
            $or: [
                { creator: creatorId },
                { members: creatorId }
            ]
        }).sort({ createdAt: -1 }).populate('creator', 'email').populate({
            path: 'members',
            model: 'User',
            select: 'email'
        });

        if (!teamDetails) {
            return res.status(404).json({ message: "Team not found" });
        }

        const formattedTeamDetails = {
            rolesummary: teamDetails.rolesummary,
            teamname: teamDetails.teamname,
            creator: teamDetails.creator.email,
            members: teamDetails.members.map(member => ({
                email: member.email,
                name: member.firstname + ' ' + member.lastname
            }))
        };
        res.json(formattedTeamDetails);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch team details" });
    }
})

export default router