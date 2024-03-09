/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginSignup'
import Home from './components/HomePage'
import FormComponent from './components/FormComponent'
import FormTest from './components/formtest'

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<FormComponent/>}/>
        <Route path='/formtest' element={<FormTest/>}/>
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;