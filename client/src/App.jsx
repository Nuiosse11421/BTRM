/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginSignup'
import PrivateRoute from './components/PrivateRoute';
import Home from './components/HomePage'
import NavBar from './components/NavBar';


function App() {
  const isAuthenticated = ()=>{
    const token = localStorage.getItem('token')
    return token ? true:false
  }
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;