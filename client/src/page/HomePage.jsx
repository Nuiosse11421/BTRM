import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import FormComponent from './FormComponent';
import RoleScoreChart from '../components/RoleScoreChart'; // Import other page components
import HistoryPage from '../components/HistoryPage';
import Contact from '../components/Contact';
import CreateTeamPage from '../components/CreateTeamPage';

function HomePage() {
  const [hasFilledForm, setHasFilledForm] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showChartPopup, setShowChartPopup] = useState(false);
  const [showHistoryPopup, setShowHistoryPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showCreateTeamPopup, setShowCreateTeamPopup] = useState(false);

  // Simulate user signed up for the first time
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  useEffect(() => {
    // If it's the first time user, force them to fill out the form
    if (firstTimeUser) {
      setShowFormPopup(true);
      setFirstTimeUser(false);
    }
  }, [firstTimeUser]);

  // Function to handle form submission
  const handleFormSubmit = () => {
    // Here you can perform form validation and submission
    // For simplicity, let's just set hasFilledForm to true
    setHasFilledForm(true);
    setShowFormPopup(false); // Close the form popup after submission
  };

  // If the user has not filled out the form, show the form popup
  if (!hasFilledForm && showFormPopup) {
    return <FormComponent onSubmit={handleFormSubmit} />;
  }

  // If the user has not filled out the form, Navigate them to the form page
  if (!hasFilledForm) {
    return <Navigate to="/form" />;
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1>Home Page</h1>
        <button onClick={() => setShowFormPopup(true)}>Fill out form</button>
        <button onClick={() => setShowChartPopup(true)}>View Chart</button>
        <button onClick={() => setShowHistoryPopup(true)}>View History</button>
        <button onClick={() => setShowContactPopup(true)}>Contact Us</button>
        <button onClick={() => setShowCreateTeamPopup(true)}>Create Team</button>
        {/* Render pop-ups for other pages */}
        {showChartPopup && <RoleScoreChart onClose={() => setShowChartPopup(false)} />}
        {showHistoryPopup && <HistoryPage onClose={() => setShowHistoryPopup(false)} />}
        {showContactPopup && <Contact onClose={() => setShowContactPopup(false)} />}
        {showCreateTeamPopup && <CreateTeamPage onClose={() => setShowCreateTeamPopup(false)} />}
      </div>
    </div>
  );
}

export default HomePage;
