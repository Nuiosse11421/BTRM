import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema({
    _id:String,
    contact_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
},{timestamp:true})
const Contact = mongoose.model('Contact',contactSchema)
export default Contact