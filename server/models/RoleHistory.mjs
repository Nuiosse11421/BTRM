import mongoose from "mongoose"

const rolehistorySchema = new mongoose.Schema({
    _id: String,
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
    },
    timestamp: Date
})
const RoleHistory = mongoose.model('RoleHistory', rolehistorySchema)
export default RoleHistory