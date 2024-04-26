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
        const { userID, teamSelectname } = req.query
        const team = await Team.findOne({
            $or: [
                { creator: userID },
                { members: { $in: [userID] } }
            ],
            teamname: teamSelectname
        });
        if (!team) {
            return res.status(404).json({ message: 'Team not found' })
        }
        const crInfo = team.creator
        const Creator = await User.findById(crInfo._id)
        const creatorProfile = await Profile.findById(Creator._id)
        const formattedMembers = []
        for (const member of team.members) {
            const profile = await Profile.findOne({ _id: member._id })
            const usermem = await User.findOne({ _id: profile._id })
            const emails = usermem.email
            formattedMembers.push({
                email: emails,
                name: profile.firstname + " " + profile.lastname
            })
        }
        const formattedCreator = [
        ]
        formattedCreator.push({
            email: Creator.email,
            name: creatorProfile.firstname + " " + creatorProfile.lastname
        })

        const TeamData = {
            teamname: team.teamname,
            creator: formattedCreator,
            members: formattedMembers,
            roles: team.rolesummary
        }
        res.status(200).json({ TeamData })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch team details" });
    }
})
router.get('/team-list', async (req, res) => {
    try {
        const { userID } = req.query
        const teams = await Team.find(
            { $or: [{ creator: userID }, { members: userID }] },
            { teamname: 1, members: 1, creator: 1 }
        )
        const teamsWithMemberCount = teams.map(team => ({
            teamname: team.teamname,
            memberCount: team.members.length + 1
        }))
        res.status(200).json({ teams: teamsWithMemberCount })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Failed to fetch team list" })
    }
})

export default router