import React from "react";
import "./Home.css";

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      
      <div className="hero-content container position-relative">
        {/* Date Badge: Smaller text and padding on small screens */}
        <div className="badge mb-20 mb-md-4 px-9 px-md-7 py-2">
          November 21-22, 2025 • Dubai, UAE
        </div>

        {/* Main Heading: display-4 on mobile, display-1 on desktop */}
        <h1 className="fw-bold text-white mb-2 mb-md-3 display-4 display-lg-1">
          The Mega <span className="highlight">AI</span> Conference
        </h1>

        <h3 className="text-light-50 fw-medium fs-9 fs-md-2 mb-4">
          in Middle East Region
        </h3>

        <p className="text-secondary mx-auto mb-5 d-none d-md-block" style={{ maxWidth: "600px" }}>
          Meet AI experts from startups to Fortune 500 Companies.
        </p>

        {/* Buttons: flex-column (stacked) on mobile, flex-row (side-by-side) on md+ screens */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 align-items-center">
          <button className="primary-btn px-5 py-3 w-20 w-md-auto">Book Ticket</button>
          <button className="outline-btn px-5 py-3 w-20 w-md-auto">Exhibit</button>
        </div>
        
        <div className="chat mt-4">
          <span className="text-white-50">Chat Now →</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;