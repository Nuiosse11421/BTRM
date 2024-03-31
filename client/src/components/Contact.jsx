// ContactManagement.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './css/ContactManager.css'; // Import CSS file
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useGetUserID } from '../hook/useGetUserID';

const ContactManagement = () => {

    const [searchedContacts, setSearchedContacts] = useState([]);
    const [contactList, setContactList] = useState([])
    const userID = useGetUserID()
    const handleFormSumbit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const name = formData.get('name')
        try {
            const response = await axios.get(`http://localhost:8000/api/search-profile`, {
                params: {
                    search: name,
                    userID: userID
                }
            })
            setSearchedContacts(response.data.contacts)
        } catch (err) {
            console.error(err);
        }
    }

    const handleAddContact = async (contactEmail) => {
        try {
            const contactUser = await axios.get(`http://localhost:8000/api/search-profile`, {
                params: {
                    search: contactEmail,
                    userID: userID
                }
            });

            if (!contactUser.data.contacts.length) {
                alert('Contact user not found');
                return;
            }

            if (userID === contactUser.data.contacts[0]._id) {
                alert('You cannot add yourself as a contact');
                return;
            }

            const response = await axios.post('http://localhost:8000/api/add-contact', {
                userID: userID,
                contactEmail: contactEmail
            });

            alert(response.data.message);
        } catch (err) {
            alert('Maybe you have already this Contact');
        }
    };
    const formatDate = (data) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
        return new Date(data).toLocaleDateString(undefined, options)
    }
    const handleRemoveContact = async (contactEmail) => {
        try {
            await axios.delete('http://localhost:8000/api/delete-contact', {
                data: {
                    userID: userID,
                    contactEmail: contactEmail
                }
            })
            alert('Remove Contact Successful')
            const updatedContactList = contactList.filter(contact => contact.email !== contactEmail);
            setContactList(updatedContactList);
        } catch (err) {

        }
    }


    const fetchContactList = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/contact-list', {
                params: {
                    userID: userID
                }
            })
            setContactList(response.data.contacts)
        }
        catch (err) {
        }
    }
    useEffect(() => {
        fetchContactList()
    }, [userID])
    return (
        <>
            <NavBar />
            <div className="contact-container">
                <div className="app-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores amet incidunt,
                        mollitia beatae ea eaque quibusdam numquam repellat enim! Reprehenderit?</p>
                    <div className="add-contact">
                        <h2>Add Contact</h2>
                        <form onSubmit={handleFormSumbit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name or Email"
                            />
                            <button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    <div className="contact-list">
                        <h3>Search Contact List</h3>
                        <div className="contact-list-details">
                            {searchedContacts.map((contact, index) => (
                                <div key={index} className="card">
                                    <div className="card-body">
                                        <div className="profile-picture">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <div className="contact-details">
                                            <ul className='contact-details-group'>
                                                <li><strong>Name: </strong> {contact.firstname + ' ' + contact.lastname}</li>
                                                <li><strong>Position: </strong> {contact.position}</li>
                                                <li><strong>Roles Score: </strong></li>
                                                <li><strong>Email: </strong> {contact.email}</li>
                                                <li><strong>Gender: </strong>{contact.gender}</li>
                                                <li><strong>Birthday: </strong>{formatDate(contact.date_of_birth)}</li>
                                            </ul>
                                            <div className="card-actions">
                                                <button className="btn-custom" onClick={() => handleAddContact(contact.email)}>Add</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='list-contacts'>
                    <h3>Contact List</h3>
                    <div>
                        {contactList.map((contact, index) => (
                            <div className='contact-list-card' key={index}>
                                <ul>
                                    <li><strong>Name: </strong>{contact.firstname + ' ' + contact.lastname}</li>
                                    <li><strong>Email: </strong>{contact.email}</li>
                                    <li><strong>Gender: </strong>{contact.gender}</li>
                                </ul>
                                <button className='remove-contact' onClick={() => handleRemoveContact(contact.email)}>Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactManagement;
