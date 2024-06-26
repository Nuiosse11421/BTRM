import express from 'express'
import userModel from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import RoleHistory from '../models/RoleHistory.mjs'

const router = express.Router()


const predefinedRoles = {
    IM: {
        name: 'Implementer',
        description: 'Needed to plan a workable strategy and carry it out as efficiently as possible.',
        strengths: 'Practical, reliable, efficient. Turns ideas into actions and organises work that needs to be done.',
        weeknesses: 'Can be a bit inflexible and slow to respond to new possibilities.',
        surprised: 'They might be slow to relinquish their plans in favour of positive changes.',
    },
    CO: {
        name: 'Co-ordinator',
        description: "Needed to focus on the team's objectives, draw out team members and delegate work appropriately.",
        strengths: 'Mature, confident, identifies talent. Clarifies goals',
        weeknesses: 'Can be seen as manipulative and might offload their own share of the work.',
        surprised: 'They might over-delegate, leaving themselves little work to do.',
    },
    SH: {
        name: 'Shaper',
        description: 'Provides the necessary drive to ensure that the team keeps moving and does not lose focus or momentum.',
        strengths: 'Challenging, dynamic, thrives on pressure. Has the drive and courage to overcome obstacles.',
        weeknesses: "Can be prone to provocation, and may sometimes offend people's feelings.",
        surprised: 'They could risk becoming aggressive and bad-humoured in their attempts to get things done.',
    },
    PL: {
        name: 'Plant',
        description: 'Tends to be highly creative and good at solving problems in unconventional ways.',
        strengths: 'Creative, imaginative, free-thinking, generates ideas and solves difficult problems.',
        weeknesses: 'Might ignore incidentals, and may be too preoccupied to communicate effectively.',
        surprised: 'They could be absent-minded or forgetful.',
    },
    RI: {
        name: 'Resource Investigator',
        description: 'Uses their inquisitive nature to find ideas to bring back to the team.',
        strengths: 'Outgoing, enthusiastic. Explores opportunities and develops contacts.',
        weeknesses: 'Might be over-optimistic, and can lose interest once the initial enthusiasm has passed.',
        surprised: 'They might forget to follow up on a lead.',
    },
    ME: {
        name: 'Monitor Evaluator',
        description: "Provides a logical eye, making impartial judgements where required and weighs up the team's options in a dispassionate way.",
        strengths: 'Sober, strategic and discerning. Sees all options and judges accurately.',
        weeknesses: 'Sometimes lacks the drive and ability to inspire others and can be overly critical.',
        surprised: 'They could be slow to come to decisions.',
    },
    TW: {
        name: 'Teamworker',
        description: 'Helps the team to gel, using their versatility to identify the work required and complete it on behalf of the team.',
        strengths: 'Co-operative, perceptive and diplomatic. Listens and averts friction.',
        weeknesses: 'Can be indecisive in crunch situations and tends to avoid confrontation.',
        surprised: 'They might be hesitant to make unpopular decisions.',
    },
    CF: {
        name: 'Completer Finisher',
        description: 'Most effectively used at the end of tasks to polish and scrutinise the work for errors, subjecting it to the highest standards of quality control.',
        strengths: 'Painstaking, conscientious, anxious. Searches out errors. Polishes and perfects.',
        weeknesses: 'Can be inclined to worry unduly, and reluctant to delegate.',
        surprised: 'They could be accused of taking their perfectionism to extremes.',
    },
    SP: {
        name: 'Specialist',
        description: 'Brings in-depth knowledge of a key area to the team.',
        strengths: 'Single-minded, self-starting and dedicated. They provide specialist knowledge and skills.',
        weeknesses: 'Tends to contribute on a narrow front and can dwell on the technicalities.',
        surprised: 'They overload you with information.',
    },
}
//http://localhost:8000/api/role-latest
router.get('/role-latest', async (req, res) => {
    try {
        const { userID } = req.query
        const profilefind = await Profile.findOne({_id:userID})
        if(!profilefind){
            return res.status(404).json({error:'Profile not found'})
        }
        const roleProfile = profilefind.roles
        res.json(roleProfile)
    }
    catch (err) {
        console.error(err)
    }
})

//http://localhost:8000/api/chart-data
router.get('/chart-data',async(req,res)=>{
    try{
        const { userID } = req.query
        if(!userID){
            return res.status(400).json({ error: 'User ID is required' });
        }
        const HisRole = await RoleHistory.findOne({_id:userID})
        const roleHistorys = HisRole.roles
        const ChartData = roleHistorys.map(entry=>({
            timestamp:entry.timestamp,
            roleData:entry.rolesed,
        }))
        res.json(ChartData)
    }
    catch (err) {
        console.error(err)
    }
})


//http://localhost:8000/api/role-card
router.get('/role-card', async(req,res)=>{
    try{
        const description = predefinedRoles
        res.json(description)
    }catch(err){
        console.error('can not send role description request',err)
    }
})




export default router