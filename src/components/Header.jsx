import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const userName = localStorage.getItem('userName');
  const avatar = localStorage.getItem('avatar');
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    localStorage.removeItem('userName');
    window.location.href = '/login';
  };

  const shouldShowLogin = !['/login', '/dashboard'].includes(location.pathname);
  const shouldShowSignup = !['/signup', '/dashboard'].includes(location.pathname);
  const shouldShowdashboard=!['/signup','/login','/forgot-password','/verify-token/:token','/reset-password/:token','/'].includes(location.pathname);

  return (
    <nav className="navbar py-1 sticky-top navbar-expand-lg text-white header-container ">
      <Link to="/dashboard">
         <img src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104937.jpg?w=740&t=st=1701660710~exp=1701661310~hmac=0a09a5a5a389dc65905c73db0db74b95b75d68306e64377720e73452737dfdb1" width="120" height="80" className="navbar-brand" alt="Brand Logo" /> 
        {/* <h1 className="navbar-brand">Aaara</h1> */}
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse ml-2 navbar-collapse justify-content-end"
        id="navbarNav">
        <ul className="navbar-nav">
          {shouldShowSignup && (
            <li className="nav-item active">
              <h4><Link className="nav-link text-white" to="/signup">Signup</Link></h4>
            </li>
          )}
          {shouldShowLogin && (
            <li className="nav-item active">
              <h4><Link className="nav-link text-white" to="/login">Login</Link></h4>
            </li>
          )}
          {shouldShowdashboard && (
            <>
            {/* <li className="nav-item">
            <h4><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></h4>
          </li> */}
         
          <li className="nav-item">
            <h4><Link className="nav-link text-white" type='button' onClick={handleLogout}>Logout</Link></h4>
          </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
