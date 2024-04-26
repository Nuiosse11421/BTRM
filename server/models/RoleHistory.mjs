import mongoose from "mongoose"
const roleHistory = new mongoose.Schema({
    rolesed:{
        IM: Number,
        CO: Number,
        SH: Number,
        PL: Number,
        RI: Number,
        ME: Number,
        TW: Number,
        CF: Number,
        SP: Number
    },
    timestamp: Date
},{ _id: false })
const rolehistorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    roles: [roleHistory]
})
const RoleHistory = mongoose.model('RoleHistory', rolehistorySchema)
export default RoleHistory