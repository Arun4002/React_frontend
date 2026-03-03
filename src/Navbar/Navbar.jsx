import React, { useState } from "react";
import "./Navbar.css";

function CustomNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav-container">
        <div className="container-fluid">

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="me-2 fs-4">🌐</span>
            <div className="lh-1">
              <div className="fw-bold">
                <span className="text-white">World</span>{" "}
                <span className="text-info">AI</span>
              </div>
              <div className="brand-subtext">Technology Expo</div>
            </div>
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Speakers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Event Details</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Agenda</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Get involved</a></li>
              <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
              <li className="nav-item ms-lg-3">
                <button className="book-ticket-btn">Book Ticket</button>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default CustomNavbar;