import React from 'react';
import { Line } from 'react-chartjs-2';

const RoleScoreChart = ({ data }) => {
  // Check if data is undefined or not an array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  // Check if scores array is available in at least one entry
  if (!data[0].scores || !Array.isArray(data[0].scores) || data[0].scores.length === 0) {
    return <div>No scores available</div>;
  }

  // Assuming date is a property of each score entry
  const labels = data[0].scores.map(entry => entry.date);

  // Create datasets for each role
  const datasets = data.map((role, index) => ({
    label: role.roleName, // Assuming roleName is a property of each role
    data: role.scores.map(entry => entry.score), // Assuming score is a property of each score entry
    borderColor: getColor(index),
    backgroundColor: 'transparent',
    lineTension: 0.5,
    fill: false,
  }));

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  // Generate random color based on index
  const getColor = index => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    return colors[index % colors.length];
  };

  return (
    <div>
      <h2>Role Score Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RoleScoreChart;
