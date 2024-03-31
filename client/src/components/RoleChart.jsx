import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useGetUserID } from '../hook/useGetUserID';
import axios from 'axios';


const RoleChart = () => {
  const userID = useGetUserID();
  const [chartData, setChartData] = useState([])
  let chartRef = null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/chart-data", {
          params: { userID }
        })
        setChartData(response.data)
      } catch (err) {
        console.error(err)
        setChartData([])
      }
    }
    if (userID) {
      fetchData()
    }
  }, [userID])
  useEffect(() => {
    if (chartData.length > 0) {
      createMultiLineChart();
    }
  }, [chartData]);
  const createMultiLineChart = () => {
    const ctx = document.getElementById('myChart').getContext('2d')
    const roleColors = ['#FF5733', '#33FF57', '#337AFF', '#33FFAB', '#FF33E9', '#FF9D33', '#8C33FF', '#FF3333', '#33FF9D', '#33D6FF']

    if(window.myChart instanceof Chart){
      window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.map(entry => formatDate(entry.timestamp)),
        datasets: Object.keys(chartData[0].roleData).map((roleName, index) => ({
          label: roleName,
          data: chartData.map(entry => entry.roleData[roleName]),
          borderColor: roleColors[index % roleColors.length],
          borderWidth: 1,
          fill: false,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (!chartData || chartData.length === 0) {
    return (
      <div>

        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div>
      <NavBar />
      <h1>Role Score Chart</h1>
      <div className=''>
        <canvas id="myChart" width={800} height={600}></canvas>
      </div>
    </div>
  );
};

export default RoleChart;
