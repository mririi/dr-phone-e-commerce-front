import React from "react";

const NotAuthorized = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-danger">Access Denied</h2>
              <p className="card-text">
                Sorry, you are not authorized to view this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
