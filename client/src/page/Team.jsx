import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useGetUserID } from "../hook/useGetUserID";
import axios from "axios";
import '../components/css/team.css'
const Team = () => {
    const userID = useGetUserID()
    const [contactList, setContactList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [teamName, setTeamName] = useState('');

    useEffect(() => {
        fetchContactList();
    }, [userID]);
    const fetchContactList = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/contact-list', {
                params: {
                    userID: userID
                }
            })
            setContactList(response.data.contacts)
        } catch (err) {
        }
    }
    const handleCreateTeam = async () => {
        try{
            const response  = await axios.post('http://localhost:8000/api/create-team',{
                teamname : teamName,
                creatorId :userID,
                memberMail:selectedMembers.map(member=>member.email)
            })
            console.log("Creating team...");
            setShowModal(false);
        }catch(err){

        }
    };
    const handleAddMember = (member) => {
        if (!selectedMembers.some(selected => selected.email === member.email)) {
            setSelectedMembers([...selectedMembers, member]);
        }
    };
    const handleRemoveMember = (member) => {
        setSelectedMembers(selectedMembers.filter(item => item !== member));
    };
    return (
        <>
            <NavBar />
            <div className="team-container">
                <h2>My Team</h2>
                <div>
                    <button onClick={() => setShowModal(true)}>Create Team</button>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>×</span>
                        <h2>Create Team</h2>
                        <div>
                            <label htmlFor="teamName">Team Name:</label>
                            <input
                                type="text"
                                id="teamName"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>
                        <div>
                            <h3>Selected Members</h3>
                            {selectedMembers.map((member, index) => (
                                <div key={index}>
                                    {member.firstname} {member.lastname}
                                    <button onClick={() => handleRemoveMember(member)}>Remove</button>
                                </div>
                            ))}
                        </div>
                        <h3>Contact List</h3>
                        <div className="contact-list">
                            {contactList.map((contact, index) => (
                                <div className='contact-list-card-teampage' key={index}>
                                    <ul>
                                        <li className="namedetail"><strong>Name: </strong>{contact.firstname + ' ' + contact.lastname}</li>
                                        <li className="emaildetail"><strong>Email: </strong>{contact.email}</li>
                                        <li className="genderdetail"><strong>Gender: </strong>{contact.gender}</li>
                                        <button onClick={() => handleAddMember(contact)}>Add to Team</button>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleCreateTeam}>Create Team</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Team