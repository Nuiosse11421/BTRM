// ContactManagement.jsx
import React, { useState } from 'react';
import './css/ContactManager.css'; // Import CSS file
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ContactManagement = () => {
    const [contacts, setContacts] = useState([
        {
            name: "John Doe",
            position: "Manager",
            email: "john.doe@example.com",
            
        },
        {
            name: "Jane Smith",
            position: "Sales Representative",
            email: "jane.smith@example.com",
            
        },
        {
            name: "Alice Johnson",
            position: "Developer",
            email: "alice.johnson@example.com",
            
        },
        {
            name: "Bob Johnson",
            position: "Data Analyst",
            email: "bob.johnson@example.com",
            
        },
        {
            name: "Sarah Lee",
            position: "Data Scientist",
            email: "sarah.lee@example.com",
            
        },
        {
            name: "Michael Wang",
            position: "Database Administrator",
            email: "michael.wang@example.com",
            
        },
        {
            name: "Emily Chen",
            position: "Data Engineer",
            email: "emily.chen@example.com",
            
        },
        {
            name: "Daniel Kim",
            position: "Machine Learning Engineer",
            email: "daniel.kim@example.com",
            
        },
        {
            name: "Jessica Wong",
            position: "Business Intelligence Analyst",
            email: "jessica.wong@example.com",
            
        },
        {
            name: "Alex Zhang",
            position: "Data Architect",
            email: "alex.zhang@example.com",
            
        },
        {
            name: "Sophia Liu",
            position: "Data Quality Analyst",
            email: "sophia.liu@example.com",
            
        },
        {
            name: "Ryan Chen",
            position: "Big Data Engineer",
            email: "ryan.chen@example.com",
            
        },
        {
            name: "Grace Wu",
            position: "Data Visualization Specialist",
            email: "grace.wu@example.com",
            
        },
        {
            name: "Phawat Thalalai",
            position: "Frontend Developer",
            email: "Phawat.th@example.com",
            
        }
    ]);

    const [searchedContacts, setSearchedContacts] = useState([]);

    const addContact = (name) => {
        const newContact = { name };
        setContacts([...contacts, newContact]);
    };

    const removeContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    const searchContact = (name) => {
        const searched = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
        setSearchedContacts(searched);
    };

    const handleInputChange = (e) => {
        const name = e.target.value;
        searchContact(name);
    };

    return (
        <>
            <NavBar />
            <div className="app-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores amet incidunt,
                    mollitia beatae ea eaque quibusdam numquam repellat enim! Reprehenderit?</p>
                <div className="add-contact">
                    <h2>Add Contact</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target.elements.name.value;
                        searchContact(name);
                        e.target.reset();
                    }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name or ID"
                            onChange={handleInputChange}
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
                                            <li><strong>Name:</strong> {contact.name}</li>
                                            <li><strong>Position:</strong> {contact.position}</li>
                                            <li><strong>Email:</strong> {contact.email}</li>
                                        </ul>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn-custom" onClick={() => removeContact(index)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactManagement;