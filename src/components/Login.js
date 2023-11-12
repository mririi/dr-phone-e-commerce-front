import React, { useState } from 'react';
import { loginUser } from '../apiService';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      return response;
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <Link to='/profile' className="btn btn-primary" >Log In</Link>
                <Link to="/register" className="btn btn-link">Register?</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;