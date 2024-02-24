// use /reigster/api/createUser to use registered form
import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
import bcrypt from 'bcrypt'
import { Op } from 'sequelize'
const router = express.Router()

router.post("/api/createUser", async (req, res) => {
  const { username, email, password, firstname, lastname, gender, date_of_birth } = req.body;
  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "User with the same email or username already exists" });
    }
    const hashedP = await bcrypt.hash(password, 10)
    // Create user
    const user = await User.create({ username, email, password:hashedP});

    // Create profile
    const profile = await Profile.create({
      firstname,
      lastname,
      gender,
      date_of_birth,
      UserId: user.id 
    });

    
    res.status(201).json({ message: "User registered successfully", user, profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error",message:err.message }); 
  }
});

export default router