// use /reigster/api/createUser to use registered form
import express from 'express'
import User from '../models/userModel.mjs'
import Profile from '../models/profileModel.mjs'
const router = express.Router();

router.post("/api/createUser", async (req, res) => {
  const { username, email, password, name, lastname, age, nationality, gender, date_of_birth } = req.body;
  try {
    // Create user
    const user = await User.create({ username, email, password });

    // Create profile
    const profile = await Profile.create({
      name,
      lastname,
      age,
      nationality,
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