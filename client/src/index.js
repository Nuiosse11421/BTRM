import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './components/form';
import App from './App'


const Home = () => (
  <div>
    <h1>Welcome to My App</h1>
    <Link to="/form">Go to Form Page</Link>
  </div>
);

const MainApp = () => (
  <Router>
    <Route path="/form" component={Form} />
    <Route exact path="/" component={Home} />
  </Router>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));