import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";  

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>  

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'}`}>
               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </nav>
  );
}

// PropTypes not working
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about us here'
};