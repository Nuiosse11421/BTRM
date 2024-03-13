import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    contact_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
},{timestamp:true})
const Contact = mongoose.model('Contact',contactSchema)
export default Contact