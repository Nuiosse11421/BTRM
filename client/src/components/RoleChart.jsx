import React from 'react';
import RoleScoreChart from './RoleScoreChart';
import NavBar from './NavBar';

const RoleChart = () => {
  // Sample data for demonstration
  const formData = [
    { date: '2024-02-01', role1: [80, 85, 90, 95, 100], role2: [75, 80, 85, 90, 95], role3: [70, 75, 80, 85, 90], role4: [65, 70, 75, 80, 85], role5: [60, 65, 70, 75, 80] },
    { date: '2024-02-02', role1: [80, 85, 90, 95, 100], role2: [75, 80, 85, 90, 95], role3: [70, 75, 80, 85, 90], role4: [65, 70, 75, 80, 85], role5: [60, 65, 70, 75, 80] },
    { date: '2024-02-03', role1: [80, 85, 90, 95, 100], role2: [75, 80, 85, 90, 95], role3: [70, 75, 80, 85, 90], role4: [65, 70, 75, 80, 85], role5: [60, 65, 70, 75, 80] },
    // Add more data entries as needed
  ];

  return (
    <div>
      <NavBar/>
      <h1>Role Score Chart</h1>
      <RoleScoreChart data={formData} />
    </div>
  );
};

export default RoleChart;