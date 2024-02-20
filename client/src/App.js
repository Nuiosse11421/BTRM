import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={HistoryPage} />
    </Router>
  );
}

export default App;
