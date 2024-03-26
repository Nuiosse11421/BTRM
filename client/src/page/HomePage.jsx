import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import RoleCard from "../components/RoleCard";
function HomePage() {

  return (
    <div>
      <NavBar />
      <div>homepage</div>
      <RoleCard/>
    </div>
  );
}

export default HomePage;
