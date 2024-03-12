import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faChartColumn, faHistory, faFileAlt, faAddressBook, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ username }) => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(true); // Change this based on your authentication logic

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        // Example of fetching user profile data from an API using the username
        const response = await fetch(`https://example.com/api/user/${username}`);
        if (response.ok) {
          const userData = await response.json();
          setUserProfile(userData);
        } else {
          throw new Error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error here
        // For example: set error state to display an error message
      } finally {
        setLoading(false);
      }
    };
  
    if (authenticated) {
      fetchUserProfile();
    }
  }, [authenticated, username]);

  if (!authenticated) {
    return <div>Please login to view your profile.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
        <button onClick={() => setOpen(!open)} style={{ fontSize: '1.5rem' }}>
          <FontAwesomeIcon icon={faBars} style={{ width: '30px' }} />
        </button>
        {open && (
          <div style={{ width: '200px', position: 'absolute', top: '3rem', left: 0, backgroundColor: '#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img
                  src={userProfile.profilePicture}
                  alt={username}
                  style={{
                    width: '1in', // Set width to 1 inches
                    height: '1in', // Set height to 1 inches
                    borderRadius: '50%',
                  }}
                />
                <div>{username}</div>
              </div>
            </div>
            <ul className="navbar">
              <li className="navbar-item" key="home">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                  <span className="navbar-text">Home</span>
                </Link>
              </li>
              <li className="navbar-item" key="profile">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                  <span className="navbar-text">Profile</span>
                </Link>
              </li>
              <li className="navbar-item" key="chart">
                <Link to="/chart">
                  <FontAwesomeIcon icon={faChartColumn} className="navbar-icon" />
                  <span className="navbar-text">Chart</span>
                </Link>
              </li>
              <li className="navbar-item" key="history">
                <Link to="/history">
                  <FontAwesomeIcon icon={faHistory} className="navbar-icon" />
                  <span className="navbar-text">History</span>
                </Link>
              </li>
              <li className="navbar-item" key="form">
                <Link to="/form">
                  <FontAwesomeIcon icon={faFileAlt} className="navbar-icon" />
                  <span className="navbar-text">Form</span>
                </Link>
              </li>
              <li className="navbar-item" key="contact">
                <Link to="/contact">
                  <FontAwesomeIcon icon={faAddressBook} className="navbar-icon" />
                  <span className="navbar-text">Contact</span>
                </Link>
              </li>
              <li className="navbar-item" key="createteam">
                <Link to="/createteam">
                  <FontAwesomeIcon icon={faUsers} className="navbar-icon" />
                  <span className="navbar-text">Createteam</span>
                </Link>
              </li>
              {/* Add other list items */}
              <li className="logout-item" key="logout">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                  <span className="logout-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;


