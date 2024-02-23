// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register'
import FormComponent from './components/FormComponent';
import Login from './LoginSignup'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/form' element={<FormComponent/>}></Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;