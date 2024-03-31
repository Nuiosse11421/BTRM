import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import './css/NavBar.css'; // Import CSS file
import BTRMlogo from '../images/BTRMlogo.png';

const NavBar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["access_token"]);

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <div className="header-container">

        <img src={BTRMlogo} alt="" className='logo'/>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chart">Chart</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/createteam">Team</Link></li>
      </ul>

      <div className="login">
        <ul className="login">
            <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
            {!cookies.access_token ? (
            <li><Link className="nav-login" to="/login">Login</Link></li>
            ) : (
            <li><button onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
            )}
        </ul>
      </div>
      
    </div>
  );
}

export default NavBar