import { response } from 'express'
import React, { useState, useEffect } from 'react'

function App() {
  const [backendData, setBeckendData] = useState()
  useEffect(() => {
    fetch("/api").then(response => response.json())
      .then(
        data => {
          setBeckendData(data)
        }
      ).catch(err => console.log("Error from App.js client to fetch '/api'", err))
  },[])
  return (
    <div>App</div>
  )
}

export default App