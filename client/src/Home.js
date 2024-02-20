import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Single Page</h1>
      <Link to="/form">Go to Form Page</Link>
    </div>
  );
}

export default Home;