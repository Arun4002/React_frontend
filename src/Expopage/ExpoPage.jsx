import {
  FaEnvelope,
  FaFacebookF, FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube
} from 'react-icons/fa';
import './ExpoPage.css';

const ExpoPage = () => {
  return (
    <div className="page-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero-bg-slant"></div>
        <div className="hero-container">
          <div className="hero-text">
            <p className="top-label">Digital Magazine</p>
            <h2 className="secondary-title">World AI Technology</h2>
            <h1 className="primary-title">Expo Magazine 2025</h1>
            <button className="magazine-btn">View Magazine</button>
          </div>

          <div className="hero-image">
            <div className="image-shadow-box">
              <img 
                src="https://www.aam-us.org/wp-content/uploads/2025/07/2025-4-July-August-cover.jpg" 
                alt="AI Universe Magazine" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="footer">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-col brand-info">
            <div className="footer-logo">
              <span className="logo-globe">🌐</span>
              <div className="logo-text">
                <strong>World AI</strong>
                <span>Technology Expo</span>
              </div>
            </div>
            <p className="brand-desc">
              The World AI Technology Expo in Dubai stands as the largest and most comprehensive AI exhibition and seminar globally, offering an unparalleled platform for innovation and collaboration.
            </p>
            <div className="social-tray">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
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

          {/* Legal */}
          <div className="footer-col">
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

          {/* Contact */}
          <div className="footer-col contact-info">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <FaPhoneAlt /> <span>+971 5858 7 2014, +971 5858 6 2014</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt /> 
              <span>Golden Tree Events LLC, 9th Floor Office No 903-03 MISA Business Center Dubai, UAE.</span>
            </div>
            <div className="contact-item">
              <FaEnvelope /> <span>events@goldentreeevent.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="disclaimer">
            <strong>Disclaimer : Important Notice to Website Visitors</strong>
            <p>
              All information displayed on this website is provided for illustrative and informational purposes only. This content does not constitute a binding offer or guarantee of specific terms, pricing, or outcomes. Actual details may vary based on market conditions and individual requirements.
            </p>
          </div>
          <hr />
          <p className="copyright">© Copyright 2025. World AI Technology Expo. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ExpoPage;