import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true
    },
    members: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Reference the User model
        },
        status: {
            type: String,
            enum: ['pending', 'accepted'],
            default: 'pending'
        }
    }],
    roles: {
        IM: Number,
        CO: Number,
        SH: Number,
        PL: Number,
        RI: Number,
        ME: Number,
        TW: Number,
        CF: Number,
        SP: Number
    }
}, { timestamps: true });

teamSchema.methods.calculateAverageScores = function() {
    let totalScores = {
        IM: 0,
        CO: 0,
        SH: 0,
        PL: 0,
        RI: 0,
        ME: 0,
        TW: 0,
        CF: 0,
        SP: 0
    };

    let memberCount = 0;

    // Calculate total scores
    this.members.forEach(member => {
        if (member.status === 'accepted' && member.user.roles) {
            memberCount++;
            Object.keys(member.user.roles).forEach(role => {
                totalScores[role] += member.user.roles[role];
            });
        }
    });

    // Calculate average scores
    const averageScores = {};
    Object.keys(totalScores).forEach(role => {
        averageScores[role] = memberCount > 0 ? totalScores[role] / memberCount : 0;
    });

    return averageScores;
};

const Team = mongoose.model('Team', teamSchema);

export default Team;