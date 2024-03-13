/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/LoginSignup'
import Home from './page/HomePage'
import FormComponent from './page/FormComponent'
import FormTest from './page/formtest'
import ContactManagement from './components/Contact' 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={ <FormComponent />}/>
        <Route path='/formtest' element={ <FormTest />}/>
        <Route path='/contact' element={ <ContactManagement />}/>
      </Routes>
    </Router>
  );
}

export default App;