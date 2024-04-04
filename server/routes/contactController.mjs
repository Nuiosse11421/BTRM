import express from 'express'
import Profile from '../models/profileModel.mjs'
import User from '../models/userModel.mjs'
import Contact from '../models/contactModel.mjs'

const router = express.Router()


//http://localhost:8000//api/search-profile
router.get('/search-profile', async (req, res) => {
    try {
        const { search, userID } = req.query
        let profiles = [], emailContact = []
        const searchParts = search.split(" ");
        const firstName = searchParts[0];
        let userContact; // Define userContact variable
        if (isValidEmail(firstName)) {
            userContact = await User.findOne({ email: firstName })
            if (userContact) {
                if (userID && userContact._id.toString() === userID) {
                    return res.json({ contacts: [] })
                }
                const profile = await Profile.findById(userContact._id)
                profiles.push(profile)
                emailContact.push(userContact.email) // Push email here
            } else {
                console.error('User not found by email')
                return res.json({ contacts: [] })
            }
        } else {
            profiles = await Profile.find({ firstname: firstName })
            if (profiles.length === 0) {
                console.error('Profile not found by firstname')
                return res.json({ contacts: [] })
            }
            for (const profile of profiles) {
                userContact = await User.findById(profile._id)
                emailContact.push(userContact.email) // Push email here
            }
        }
        const contacts = profiles.map((profile, index) => ({
            email: emailContact[index], // Use email from emailContact array
            firstname: profile.firstname,
            lastname: profile.lastname,
            gender: profile.gender,
            date_of_birth: profile.date_of_birth,
            roles: profile.roles
        }))
        if (contacts.length === 0) {
            return res.json({ message: 'Contact not found' });
        }
        res.json({ contacts })
    } catch (err) {
        console.error(err)
        res.json('User not found')
    }
})


router.post('/add-contact', async (req, res) => {
    try {
        const { userID, contactEmail } = req.body
        const user = await User.findById(userID)
        const contactUser = await User.findOne({ email: contactEmail })
        if (!contactUser) {
            return res.status(404).json({ err: 'Contact user not found' })
        }
        const existingContact = await Contact.findOne({ _id: userID, 'contact_ids': contactUser._id })
        if (existingContact) {
            return res.status(400).json({ error: 'Contact already exists' })
        }
        await Contact.updateOne({ _id: userID }, { $push: { contact_ids: contactUser._id } })
        res.status(200).json({ message: 'Contact added Sucessfully' })
    } catch (err) {
        console.error(err)
        res.json({ err: err.message })
    }
})
router.delete('/delete-contact', async (req, res) => {
    try {
        const { userID, contactEmail } = req.body
        const user = await Contact.findById(userID)
        const contactUser = await User.findOne({ email: contactEmail })
        if (!contactUser) {
            return res.status(404).json({ error: 'Contact user not found' });
        }
        const contactIndex = user.contact_ids.indexOf(contactUser._id)
        if (contactIndex === -1) {
            return res.status(404).json({ error: 'Contact not found in user\'s contact list' });
        }
        user.contact_ids.splice(contactIndex, 1)
        await user.save()
        res.status(200).json({ message: 'Contact deleted Sucessfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})

//http://localhost:8000/api/contact-list
router.get('/contact-list', async (req, res) => {
    try {
        const { userID } = req.query
        const userContacts = await Contact.findOne({ _id: userID }).populate('contact_ids')
        if (!userContacts) {
            return res.status(404).json({ error: 'Contacts not found for the user' });
        }
       const contacts = [] 
       for(const contact of userContacts.contact_ids){
        const user =await User.findById(contact._id)
        if(user){
            const profile = await Profile.findById(contact._id)
            contacts.push({
                email: user.email,
                firstname:profile.firstname,
                lastname:profile.lastname,
                gender:profile.gender
            })
        }
       }
       res.status(200).json({contacts})
    } catch (error) {

    }
})


export default router


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}