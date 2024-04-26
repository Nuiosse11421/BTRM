import mongoose from 'mongoose'
const teamSchema = new mongoose.Schema({
    teamname:{
        type:String,
        required:true,
        unique:true,
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    members:[{  
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    role:{
        type:String,
        enum:['Implementer',
        'Co-ordinator',
        'Shaper', 
        'Plant', 
        'Resource Investigator', 
        'Monitor Evaluator', 
        'Teamworker', 
        'Completer Finisher', 
        'Specialist']
    },
    rolesummary:{
        IM:Number,
        CO:Number,
        SH:Number,
        PL:Number,
        RI:Number,
        ME:Number,
        TW:Number,
        CF:Number,
        SP:Number
    }
},{timestamps:true})

teamSchema.pre('save', async function(next) {
    try {
        const Profile = mongoose.model('Profile');
        
        const members = await Profile.find({ _id: { $in: this.members } });
        
        const summary = {
            IM: 0, CO: 0, SH: 0, PL: 0, RI: 0, ME: 0, TW: 0, CF: 0, SP: 0
        };
        members.forEach(member => {
            Object.keys(member.roles).forEach(role => {
                summary[role] += member.roles[role];
            });
        });
        const memberCount = members.length;
        Object.keys(summary).forEach(role => {
            summary[role] /= memberCount;
        });
        this.rolesummary = summary;
        next();
    } catch (error) {
        next(error);
    }
});

const Team = mongoose.model('Team',teamSchema)
export default Team