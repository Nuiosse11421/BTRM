import React from "react";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
function HomePage() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Home Page</h1>
        <Link to="/form">
          <button>Go to Form Page</button>
        </Link>
        <Link to="/result">
          <button>Go to Result Page</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}
export default HomePage