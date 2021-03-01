import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/Nav">Barcelona</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Team Members">Features</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/nextmatch">Next Match</a>
      </li>
    </ul>
  </div>
</nav>
            <h3 className='header'>Players Dashboard</h3>
        </div>
    );
};

export default Header;