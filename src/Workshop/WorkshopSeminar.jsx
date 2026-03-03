import React from 'react';
import './WorkshopSeminar.css';

const WorkshopSeminar = () => {
  const benefits = [
    { icon: "💡", text: "Showcase Your Innovation" },
    { icon: "💼", text: "Brand Your Company" },
    { icon: "👤", text: "Promote Your Personal Brand" },
    { icon: "👥", text: "Pitch to Investors" },
    { icon: "💰", text: "Increase Revenue" },
    { icon: "🎙️", text: "Gain Media Exposure" },
    { icon: "📈", text: "Product Launch to Industry Experts" },
    { icon: "💵", text: "Attract Investors" },
  ];

  return (
    <section className="ws-container">
      
      <div className="ws-image-section">
        <div className="ws-img-wrapper ws-img-left">
          <img src="https://picsum.photos/id/1/250/350" alt="Speaker" />
        </div>
        <div className="ws-img-wrapper ws-img-center">
          <img src="https://picsum.photos/id/2/280/280" alt="Technical Detail" />
        </div>
        <div className="ws-img-wrapper ws-img-bottom">
          <img src="https://picsum.photos/id/3/320/320" alt="Event Networking" />
        </div>
      </div>


      <div className="ws-content-section">
        <h1 className="ws-title">
          Workshop & <span className="ws-highlight">Seminar</span>
        </h1>
        <p className="ws-description">
          Are you ready to take your business to the next level? The World AI Expo offers 
          unparalleled opportunities for presenters to showcase their innovations and 
          gain significant traction in the fast-evolving AI space.
        </p>

        <div className="ws-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="ws-benefit-card">
              <div className="ws-icon-container">{benefit.icon}</div>
              <span className="ws-benefit-text">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="ws-button-group">
          <button className="ws-btn-primary">
            Register Now ↗
          </button>
          <button className="ws-btn-text">
            Chat Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSeminar;