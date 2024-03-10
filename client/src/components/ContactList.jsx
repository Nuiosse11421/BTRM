// ContactList.jsx
import React from 'react';
<<<<<<< HEAD
import './css/ContactList.css';

const ContactList = ({ contacts, removeContact }) => {
    return (
        <div className="contact-list-details">
=======
import './CSS/ContactList.css'; // Import CSS file

const ContactList = ({ contacts, removeContact }) => {
    return (
        <div className="contact-list">
>>>>>>> d7d5da2bb4a427601a79a82436fe4d2c018e5217
            {contacts.map((contact, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
<<<<<<< HEAD
                        <p className="card-email">{contact.email}</p>
                        <div className="card-actions">
                            <button className="btn-custom" onClick={() => removeContact(index)}>Remove</button>
                        </div>
=======
                        <button className="btn btn-danger" onClick={() => removeContact(index)}>Remove</button>
>>>>>>> d7d5da2bb4a427601a79a82436fe4d2c018e5217
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
