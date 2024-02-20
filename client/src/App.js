import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import FormPage from './FormPage'; // Import your form page component

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={FormPage} /> {/* Add this line */}
      </div>
    </Router>
  );
}

export default App;