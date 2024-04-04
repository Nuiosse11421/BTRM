import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useGetUserID } from "../hook/useGetUserID";
import axios from "axios";
import '../components/css/team.css'
import Chart from 'chart.js/auto';

const Team = () => {
    const userID = useGetUserID();
    const [contactList, setContactList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [teamDetails, setTeamDetails] = useState(null);
    const [teams, setTeams] = useState([]);
    const [radarChartInstance, setRadarChartInstance] = useState(null);

    useEffect(() => {
        fetchContactList();
        fetchTeamDetails(teamName);
        fetchTeamList();
    }, [userID]);

    useEffect(() => {
        if (teamName) {
            handleChangeTeam(teamName);
        }
    }, [teamName]);

    useEffect(() => {
        if (teamDetails) {
            generateRadarChart(teamDetails);
        }
    }, [teamDetails]);

    const fetchTeamDetails = async (selectedTeamName) => {
        try {
            const response = await axios.get('http://localhost:8000/api/team-details', {
                params: {
                    userID: userID,
                    teamSelectname: selectedTeamName
                }
            });
            setTeamDetails(response.data.TeamData);
        } catch (err) {
        }
    };

    const fetchContactList = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/contact-list', {
                params: {
                    userID: userID
                }
            });
            setContactList(response.data.contacts);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCreateTeam = async () => {
        try {
            await axios.post('http://localhost:8000/api/create-team', {
                teamname: teamName,
                creatorId: userID,
                memberMail: selectedMembers.map(member => member.email)
            });
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchTeamList = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/team-list', {
                params: {
                    userID: userID
                }
            });
            setTeams(response.data.teams);
        } catch (err) {
            console.error(err);
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

    const handleChangeTeam = async (teamName) => {
        try {
            const response = await axios.get('http://localhost:8000/api/team-details', {
                params: {
                    userID: userID,
                    teamSelectname: teamName
                }
            });
            setTeamDetails(response.data.TeamData);
        } catch (err) {
            console.error(err);
        }
    };
    const generateRadarChart = (teamData) => {
        if (!teamData || !teamData.roles) return;

        const ctx = document.getElementById('radarChart');

        // Destroy the existing chart instance if it exists
        if (radarChartInstance) {
            radarChartInstance.destroy();
        }

        const newChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(teamData.roles),
                datasets: [
                    {
                        label: 'Stat Team',
                        data: Object.values(teamData.roles),
                        backgroundColor: 'rgba(114, 134, 211, 0.4)',
                        borderColor: 'rgba(114, 134, 211, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scale: {
                    ticks: {
                        display: false
                    }
                }
            }
        });

        setRadarChartInstance(newChartInstance);
    };

    return (
        <>
            <NavBar />
            <div className="team-page-container">

                <div className="radar-chart-container">
                    <canvas id="radarChart"></canvas>
                </div>
                <div className="column-section">
                    <div className="team-container">
                        <h2>My Team</h2>
                        {teamDetails ? (
                            <div>
                                <p>Team Name: {teamDetails.teamname}</p>
                                {teamDetails.creator && (
                                    <p>Creator: {teamDetails.creator[0].name} ({teamDetails.creator[0].email})</p>
                                )}
                                {teamDetails.members && teamDetails.members.length > 0 && (
                                    <div>
                                        <p>Members:</p>
                                        <ul>
                                            {teamDetails.members.map((member, index) => (
                                                <li key={index}>{member.name} ({member.email})</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {teamDetails.roles && (
                                    <div>
                                        <p>Roles Summary:</p>
                                        <ul>
                                            {Object.keys(teamDetails.roles).map((role, index) => (
                                                <li key={index}>{role}: {teamDetails.roles[role]}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p>Waiting for your selection...</p>
                        )}
                    </div>
                    <div className="team-list-container">
                        <h2>Team List</h2>
                        {teams.length > 0 ? (
                            <ul>
                                {teams.map((team, index) => (
                                    <li key={index}>
                                        <p>{team.teamname}</p>
                                        <p>Member Count: {team.memberCount}</p>
                                        <button onClick={() => handleChangeTeam(team.teamname)}>View</button>
                                    </li>

                                ))}
                            </ul>
                        ) : (
                            <p>No teams found.</p>
                        )}

                    </div>
                </div>
                <button className="custom-button" onClick={() => setShowModal(true)}>Create Team</button>

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
                                        <button className="button-remove" onClick={() => handleRemoveMember(member)}>Remove</button>
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
                                            <button className="button-add" onClick={() => handleAddMember(contact)}>Add to Team</button>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleCreateTeam}>Create Team</button>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default Team;