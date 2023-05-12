import React from 'react';

const menu = ['Home', 'Women', 'Men', 'Kids', 'Best Seller'];

export default function Topmenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menu.map((item, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link text-white" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
