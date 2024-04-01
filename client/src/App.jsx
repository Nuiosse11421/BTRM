/* eslint-disable react/jsx-no-undef */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/LoginSignup'
import Home from './page/HomePage'
import FormTest from './page/formtest'
import ContactManagement from './components/Contact'
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
        <Route path='/contact' element={ <ContactManagement />}/>
        <Route path='/history' element={ <History />}/>
        <Route path='/contact' element={ <ContactManagement />}/>
        <Route path='/team' element={ <Team />}/>

      </Routes>
    </Router>
  );
}

export default App;