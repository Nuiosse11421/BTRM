import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import './css/NavBar.css'; // Import CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faUser, faChartColumn, faHistory, faFileAlt, faAddressBook, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/form">Form</Link></li>
                {!cookies.access_token ? (
                    <li><Link className="nav-login" to="/login">Login</Link></li>
                ) : (
                    <li><button onClick={logout}>Logout</button></li>
                )}
            </ul>
        </div>
    );
}

export default NavBar;


