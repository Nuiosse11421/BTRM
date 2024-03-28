import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useGetUserID } from '../hook/useGetUserID';
import axios from 'axios';
const HistoryPage = () => {
  const userID = useGetUserID()
  const [times, setTimes] = useState([])
  const [selectedTimestamp, setSelectedTimestamp] = useState([])
  const [selectedScores, setSelectedScores] = useState([null])
  const [displayScores, setDisplayScores] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/history', {
          params: { userID }
        })
        setTimes(response.data.answerHistory)
      } catch (err) {
        console.error(err)
      }
    }
    if (userID) {
      fetchData()
    }
  }, [userID])
  useEffect(() => {
    if (selectedTimestamp !== '') {
      const selectedTime = times.find(item => item.timestamp === selectedTimestamp);
      if (selectedTime) {
        setSelectedScores(selectedTime.Score);
      }
    }
  }, [selectedTimestamp, times])
  useEffect(() => {
    if (selectedTimestamp === '') {
      setDisplayScores(null);
    } else {
      setDisplayScores(selectedScores);
    }
  }, [selectedTimestamp, selectedScores])


  const handleTimestampChange = (event) => {
    setSelectedTimestamp(event.target.value);
  };


  return (
    <div>
      <NavBar />
      
      <div className='selecttime-section'>
        <p className='timestamp-title'>เลือกช่วงเวลาที่ทำแบบฟอร์ม</p>
        <select className="select-dropdown" onChange={handleTimestampChange} value={selectedTimestamp}>
          {times.map((item, index) => (
            <option key={index} value={item.timestamp}>
              {item.timestamp}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </div>
      <div className='tableScore-container'>
        <table>
          <thead>
            <tr>
              <td>Section</td>
              {[...'abcdefghi'].map((letter) => (
                <td key={letter}>{letter.toUpperCase()}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(7).keys()].map((rowIndex) => (
              <tr key={rowIndex}>
                <th scope='row'>{rowIndex + 1}</th>
                {[...'abcdefghi'].map((letter) => (
                  <td key={letter} id={`${letter}${rowIndex + 1}`}>
                    {displayScores && displayScores[`${letter}${rowIndex + 1}`]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistoryPage;