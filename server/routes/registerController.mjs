import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import Contact from '../models/contactModel.mjs'
import AnswerModel from '../models/AnswerModel.mjs'
import RoleHistory from '../models/RoleHistory.mjs'
import bcrypt from 'bcrypt'
const router = express.Router()

router.post("/register", async (req, res) => {
  const {email, password, firstname, lastname, gender, date_of_birth } = req.body;
  const lastnames = lastname
  try {
    const user = await User.findOne({email})

    if (user) {
      return res.status(400).json({ error: "User with the same email already exists" });
    }
    const hashedP = await bcrypt.hash(password, 10)
    // Create user
    const newUser = await User.create({
      email: email,
      password:hashedP,
    });
    await AnswerModel.create({
      _id: newUser._id
    })
    await RoleHistory.create({
      _id: newUser._id
    })
    await Profile.create({
      _id: newUser._id,
      firstname: firstname,
      lastname:lastnames,
      gender: gender,
      date_of_birth: date_of_birth,
      roles: {
        IM: 0,
        CO: 0,
        SH: 0,
        PL: 0,
        RI: 0,
        ME: 0,
        TW: 0,
        CF: 0,
        SP: 0
      }
    })
    await Contact.create({ _id: newUser._id, contact_ids: [] });
    res.status(201).json({message: "Registered "})
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error",message:err.message }); 
  }
});

export default router