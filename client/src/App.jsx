/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LoginSignup from './page/LoginSignup';
import Home from './page/HomePage'
import HomeTest from './page/hometest'
import FormComponent from './page/FormComponent'
import FormTest from './page/formtest'
import ContactManagement from './components/Contact' 
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/form' element={ <FormTest />}/>
      </Routes>
    </Router>
  );
}

export default App;