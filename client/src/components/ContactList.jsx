// ContactList.jsx
import React from 'react';
import './CSS/ContactList.css'; // Import CSS file

const ContactList = ({ contacts, removeContact }) => {
    return (
        <div className="contact-list">
            {contacts.map((contact, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <button className="btn btn-danger" onClick={() => removeContact(index)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
