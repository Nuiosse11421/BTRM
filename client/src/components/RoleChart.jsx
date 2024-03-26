import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useGetUserID } from '../hook/useGetUserID';
import axios from 'axios';

const RoleChart = () => {
  const userID = useGetUserID();
  const [chartData,setChartData]= useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get("http://localhost:8000/api/chart-data",{
          params: {userID}
        })
        setChartData(response.data)
      }catch(err){}
    }
    if(userID){
      fetchData()
    }
  },[userID])
  return (
    <div>
      <NavBar />
      <h1>Role Score Chart</h1>
    </div>
  );
};

export default RoleChart;
