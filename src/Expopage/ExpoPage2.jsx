import React from 'react';
import './ExpoPage.css';
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, 
  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope 
} from 'react-icons/fa';

const ExpoPage = () => {
  return (
    <div className="landing-page">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="blue-bg-shape"></div>
        <div className="hero-container">
          <div className="hero-content">
            <p className="sub-header">Digital Magazine</p>
            <h2 className="brand-text">World AI Technology</h2>
            <h1 className="main-title">Expo Magazine 2025</h1>
            <button className="view-magazine-btn">View Magazine</button>
            {/* Chart SVG has been removed here */}
          </div>

          <div className="hero-image-wrapper">
            <img 
              src="https://www.aam-us.org/wp-content/uploads/2025/07/2025-4-July-August-cover.jpg" 
              alt="Magazine Cover" 
              className="magazine-cover"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="dark-footer">
        <div className="footer-top">
          <div className="footer-column brand-summary">
            <div className="footer-logo">
              <span className="logo-icon">🌐</span>
              <div className="logo-text">
                <strong>World AI</strong>
                <span>Technology Expo</span>
              </div>
            </div>
            <p>The World AI Technology Expo in Dubai stands as the largest and most comprehensive AI exhibition and seminar globally, offering an unparalleled platform for innovation and collaboration.</p>
            <div className="social-media-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Speakers</li>
              <li>Event Details</li>
              <li>Agenda</li>
              <li>Get involved</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Refund Policy</li>
              <li>Visitor Terms and Conditions</li>
              <li>Terms and Conditions – Appointment Fixing System</li>
              <li>Sponsorship Terms and Conditions</li>
              <li>Exhibitor Terms and Conditions</li>
              <li>Speaker Terms and Conditions</li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>+971 5858 7 2014, +971 5858 6 2014</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>Golden Tree Events LLC, 9th Floor Office No 903-03 MISA Business Center Dubai, Iris Bay - Business Bay - Dubai, UAE.</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>events@goldentreeevent.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="disclaimer-section">
            <strong>Disclaimer : Important Notice to Website Visitors</strong>
            <p>
              All information displayed on this website, including event details, pricing, service descriptions, images, specifications, testimonials, and promotional content, is provided for illustrative and informational purposes only. This content does not constitute a binding offer or guarantee of specific terms, pricing, services, or outcomes.
              Estimates and Representations: Event information, pricing, speaker lineups, venue details, participant statistics, and service specifications presented on our website represent estimates and examples only. Actual pricing, service specifications, event details, speaker availability, and terms may vary based on individual requirements, current market conditions, venue availability, regulatory approvals, and other factors at the time of inquiry or booking.
            </p>
          </div>
          <hr className="footer-divider" />
          <p className="copyright-text">© Copyright 2025. World AI Technology Expo. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ExpoPage;