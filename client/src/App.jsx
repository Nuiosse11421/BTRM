/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/LoginSignup'
import Home from './page/HomePage'
import FormTest from './page/formtest'
import ContactManagement from './components/Contact'
import Profile from './page/Profile';
import Team from './page/Team';
import RoleChart from './components/RoleChart';
import History from './page/History';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/form' element={ <FormTest />}/>
        <Route path='/chart' element={ <RoleChart />}/>
<<<<<<< HEAD
        <Route path='/contact' element={ <ContactManagement />}/>
=======
        <Route path='/history' element={ <History />}/>
        <Route path='/contact' element={ <ContactManagement />}/>
        <Route path='/team' element={ <Team />}/>
        <Route path='/profile' element={ <Profile />}/>

>>>>>>> 2468a73199eb55fae111c8039442b00596bc2097
      </Routes>
    </Router>
  );
}

export default App;