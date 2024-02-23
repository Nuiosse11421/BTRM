import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/form">
        <button>Go to Form Page</button>
      </Link>
      <Link to="/result">
        <button>Go to Result Page</button>
      </Link>
    </div>
  );
}
export default HomePage