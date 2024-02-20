import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './components/form';

// Home component with a button to navigate to the form page
const Home = () => (
  <div>
    <h1>Welcome to My App</h1>
    <Link to="/form">Go to Form Page</Link>
  </div>
);

// App component with routes
const App = () => (
  <Router>
    <Route path="/form" component={Form} />
    <Route path="/" component={Home} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));