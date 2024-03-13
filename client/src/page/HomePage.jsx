import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
function HomePage() {

  return (
    <div>
      <NavBar />
      <div>homepage</div>
    </div>
  );
}

export default HomePage;
