import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">USER DETAILS</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="navbar-item">
          <Link to="/SignUp" className="nav-link">SignUp</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user_details" className="nav-link">EnterDetails</Link>
          </li>
          <li className="navbar-item">
          <Link to="/get/:_id" className="nav-link">UsersList</Link>
          </li>
          <li className="navbar-item">
          <Link to="/get/:favourite_car" className="nav-link">CarUser</Link>
          </li>
          <li className="navbar-item">
          <Link to="/delete" className="nav-link">DeleteUser</Link>
          </li>
          <li className="navbar-item">
          <Link to="/logout/:_id" className="nav-link">LogoutUser</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}