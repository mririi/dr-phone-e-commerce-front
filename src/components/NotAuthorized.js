import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-danger">Access Denied</h2>
              <p className="card-text">Sorry, you are not authorized to view this page.</p>
              <p className="card-text">Please log in to access the content.</p>
              <Link to="/login" className="btn btn-primary">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotAuthorized;
