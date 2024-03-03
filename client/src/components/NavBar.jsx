import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true); // Change this based on your authentication logic

  useEffect(() => {
    const fetchUserProfile = () => {
      setLoading(true);

      const userData = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile-picture.jpg'
      };

      if (authenticated) {
        setUserProfile(userData);
      }
      
      setLoading(false);
    };

    fetchUserProfile();
  }, [authenticated]);

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
        <button onClick={() => setOpen(!open)}>Menu</button>
        {open && (
          <div style={{ width: '200px', position: 'absolute', top: '3rem', left: 0, backgroundColor: '#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={userProfile.profilePicture} alt={userProfile.name} style={{ marginRight: '1rem', width: '40px', height: '40px', borderRadius: '50%' }} />
                  <div>{userProfile.name}</div>
                </div>
              )}
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li key="home"><Link to="/">Home</Link></li>
              <li key="profile"><Link to="/profile">Profile</Link></li>
              <li key="chart"><Link to="/chart">RoleScoreChart</Link></li>
              <li key="history"><Link to="/history">History</Link></li>
              <li key="form"><Link to="/form">FormComponent</Link></li>
              <li key="contact"><Link to="/contact">Contact</Link></li>
              <li key="createteam"><Link to="/createteam">CreateTeamPage</Link></li>
              {/* Add other list items */}
              {authenticated && <li key="logout"><Link to="/logout">Logout</Link></li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

