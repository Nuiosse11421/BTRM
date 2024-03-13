import React from 'react';
import Logout from '../components/Logout';
const Home = ({ user }) => {
    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.firstname} {user.lastname}</h2>
                    <p>Email: {user.email}</p>
                    <p>User Id : {user._id}</p>
                    <p>Date of Birth: {user.date_of_birth}</p>
                    <p>Gender : {user.gender}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <div>
                    <h2>Welcome to the Homepage</h2>
                    <p>Please log in to view your information.</p>
                </div>
            )}
            <Logout/>
        </div>
    );
};

export default Home;