import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Home Page</h1>
      <Link to={"/profile"}>Go to Profiles</Link>
      <Link to={"/inventory"}>Go to Inventory</Link>
    </div>
  );
};

export default HomePage;