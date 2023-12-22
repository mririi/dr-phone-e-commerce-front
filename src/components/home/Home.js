import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='row col-12'>
      <Link to="/dashboard/-1" className="btn btn-primary">Dashboard</Link>
    </div>
  );
};
export default Home;
