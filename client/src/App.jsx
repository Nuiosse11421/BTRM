/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginSignup'
import Home from './components/HomePage'
import FormComponent from './page/FormComponent'
import FormTest from './page/formtest'
import ContactManagement from './components/Contact' 

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const App = () => {
  const loggendIn = isAuthenticated()
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={loggendIn ? <FormComponent /> : <Navigate to="/login" replace/>}/>
        <Route path='/formtest' element={loggendIn ? <FormTest /> : <Navigate to="/login" replace/>}/>
        <Route path='/contact' element={loggendIn ? <ContactManagement /> : <Navigate to="/login" replace/>}/>
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;