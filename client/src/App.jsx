/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginSignup'
import Home from './components/HomePage'
import FormComponent from './page/formtest/formtest.component'
import FormTest from './pages/FormTest/'
import ContactManagement from './components/Contact' 

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
        <Route path='/contact' element={<ContactManagement/>}/>
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;