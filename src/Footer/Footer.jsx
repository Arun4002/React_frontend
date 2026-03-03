import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section pt-3 pb-3">
      <div className="container">
        {/* Top Section */}
        <div className="row gy-4 mb-5">
          
          {/* Brand & Socials */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-3">
               <h4 className="text-white fw-bold m-0">World <span className="text-info">AI</span></h4>
               <p className="small text-uppercase tracking-widest text-white-50" style={{fontSize: '0.7rem'}}>Technology Expo</p>
            </div>
            <p className="text-white-50 small pe-lg-5 mb-4">
              The World AI Technology Expo in Dubai stands as the largest and most comprehensive AI exhibition and seminar globally, offering an unparalleled platform for innovation and collaboration.
            </p>
            {/* Social Icons exactly as pictured */}
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="social-icon-circle"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon-circle"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon-circle"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon-circle"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Event Details</a></li>
              <li><a href="#">Agenda</a></li>
              <li><a href="#">Get involved</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-4">Legal</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Visitor Terms and Conditions</a></li>
              <li><a href="#">Terms and Conditions - Appointment Fixing System</a></li>
              <li><a href="#">Sponsorship Terms and Conditions</a></li>
              <li><a href="#">Exhibitor Terms and Conditions</a></li>
              <li><a href="#">Speaker Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us - Icons match the image */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-4">Contact Us</h6>
            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-phone-alt text-white mt-1 me-3"></i>
              <p className="small text-white-50 mb-0">+971 5858 7 2014, +971 5858 6 2014</p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-map-marker-alt text-white mt-1 me-3"></i>
              <p className="small text-white-50 mb-0">Golden Tree Events LLC, 9th Floor Office No 903-03 MISA Business Center Dubai Iris Bay - Business Bay - Dubai, UAE.</p>
            </div>
            <div className="d-flex align-items-start">
              <i className="fas fa-envelope text-white mt-1 me-3"></i>
              <p className="small text-white-50 mb-0">events@goldentreeevent.com</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="footer-disclaimer-box pt-4 border-top border-secondary border-opacity-25">
          <h6 className="text-white small fw-bold mb-3">Disclaimer : Important Notice to Website Visitors</h6>
          <div className="text-white-50" style={{ fontSize: '0.75rem', lineHeight: '1.7' }}>
            <p>Disclaimer : Important Notice to Website Visitors

All information displayed on this website, including event details, pricing, service descriptions, images, specifications, testimonials, and promotional content, is provided for illustrative and
informational purposes only. This content does not constitute a binding offer or guarantee of specific terms, pricing, services, or outcomes.
Estimates and Representations: Event information, pricing, speaker lineups, venue details, participant statistics, and service specifications presented on our website represent estimates and
examples only. Actual pricing, service specifications, event details, speaker availability, and terms may vary based on individual requirements, current market conditions, venue availability,
regulatory approvals, and other factors at the time of inquiry or booking.
Binding Agreements: Final pricing, event specifications, deliverables, and all service terms will be confirmed only through signed service agreements between Golden Tree Events and clients.
Any such signed agreement will supersede and override all information previously presented on this website or through other promotional channels. We reserve the right to modify any
information on this website without prior notice.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-3 border-top border-secondary border-opacity-10">
          <p className="text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
            © Copyright 2025. World AI Technology Expo. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;