// ContactList.jsx
import React from 'react';
import './css/ContactList.css';

const ContactList = ({ contacts, removeContact }) => {
    return (
        <div className="contact-list-details">
            {contacts.map((contact, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-email">{contact.email}</p>
                        <div className="card-actions">
                            <button className="btn-custom" onClick={() => removeContact(index)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
