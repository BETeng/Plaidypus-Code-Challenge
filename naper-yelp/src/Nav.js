import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1> ~ Logo ~</h1>
      <ul className="nav-links">
        <Link className="nav-link-style" to ="/">
          <li>Home (search) </li>
        </Link>
        {/* <Link className="nav-link-style" to ="/results">
          <li>Results </li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
