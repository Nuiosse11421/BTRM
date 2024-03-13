import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
},
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: String,
  date_of_birth: Date,
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
})
const Profile = mongoose.model('Profile',profileSchema)
export default Profile