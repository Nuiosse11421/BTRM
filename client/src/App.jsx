// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginSignup'
import PrivateRoute from './components/PrivateRoute';
import Home from './components/HomePage'


function App() {
  const isAuthenticated = ()=>{
    const token = localStorage.getItem('token')
    return token ? true:false
  }
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;