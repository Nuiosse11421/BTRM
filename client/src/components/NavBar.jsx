import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import styles from './css/NavBar.css'; // Import CSS file
import BTRMlogo from '../images/BTRMlogo.png';
import { useGetUserID } from '../hook/useGetUserID';
import axios from 'axios';


const NavBar = () => {
  const navigate = useNavigate();
  const userID = useGetUserID()
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [name, setName] = useState({})

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };
  const fectUserName = async()=>{
    try{
      const respose = await axios.get('http://localhost:8000/api/get-name',{
        params:{
          userID : userID
        }
      })
      setName(respose.data)
    }catch{

    }
  }
  useEffect(()=>{
    fectUserName()
  },[userID])

  return (
    <header className="header-container">

        <img src={BTRMlogo} alt="" className='logo'/>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chart">Chart</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>

      <div className="login">
        <ul className="login">
            {userID === null ?(<li><Link to=""><FontAwesomeIcon icon={faUser} /> Profile</Link></li>):
            (<li><Link to=""><FontAwesomeIcon icon={faUser} />{name.currentName} </Link></li>)}
            {!cookies.access_token ? (
            <li><Link className="nav-login" to="/login">Login</Link></li>
            ) : (
            <li><button onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
            )}
        </ul>
      </div>
      
    </header>
  );
}

export default NavBar