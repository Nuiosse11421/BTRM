/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginSignup'
import Home from './components/HomePage'

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const PrivateRoute = ({ element: Element, ...rest })=> (
  isAuthenticated() ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />
)
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path="/homepage" // Adjust path from /dashboard to /homepage
          element={isAuthenticated() ? <Homepage /> : <Navigate to="/login" replace />}
        />
        {/* Add more routes here */}
        <Route path="/" element={<Navigate to="/homepage" replace />} />
      </Routes>
    </Router>
  );
}

export default App;