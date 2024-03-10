// ContactManager.jsx
import React, { useState } from 'react';
import './CSS/ContactManager.css'; // Import CSS file
import ContactList from './ContactList'; // Import ContactList component
import NavBar from './NavBar';
const ContactManager = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (name) => {
        const newContact = { name };
        setContacts([...contacts, newContact]);
    };

    const removeContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <>

            <div className="app">
                <NavBar />
                <div className="app-container">
                    <h1>Contact Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores amet incidunt, 
                        mollitia beatae ea eaque quibusdam numquam repellat enim! Reprehenderit?</p>
                    <div className="add-contact">
                        <h2>Add Contact</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.elements.name.value;
                            addContact(name);
                            e.target.reset();
                        }}>
                            <input type="text" name="name" placeholder="Enter Name or ID" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="contact-list">
                        <h2>Contact List</h2>
                        <ContactList contacts={contacts} removeContact={removeContact} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactManager;
