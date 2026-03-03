import React from 'react';
import './Pitching.css';

const Pitching = () => {
  const benefits = [
    { title: "Direct Access to Top Investors", icon: "💰" },
    { title: "Network with Industry Leaders", icon: "🤝" },
    { title: "Showcase Your Innovation", icon: "🚀" },
    { title: "Receive Constructive Feedback", icon: "📝" },
    { title: "Generate Buzz and Publicity", icon: "📣" },
    { title: "Learn from the Best", icon: "🏆" },
    { title: "Gain Media Exposure", icon: "📺" },
    { title: "Expand Your Horizons", icon: "🌍" }
  ];
  return (
    <section className="pitch-container">
      <div className="pitch-content">
        <h2 className="pitch-title">Startup <span>Pitching</span></h2>
        <p className="pitch-description">
          Seize the chance to pitch your startup at the World AI Technology Expo...
        </p>
        
       <div className="benefits-grid">
  {benefits.map((item, index) => (
    <div key={index} className="benefit-card">
      <span className="icon">{item.icon}</span>
      <p>{item.title}</p>
    </div>
  ))}
</div>

        <div className="button-group">
          <button className="btn-primary">Register Now ↗</button>
          <button className="btn-text">Chat Now →</button>
        </div>
      </div>

      <div className="pitch-images">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwW02H4bL11FXb5eP-CPoSi6H9iXipA5jVw&s" alt="Pitching Event" className="img-top" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEvRloHDzba_r_5Xln-4wW9Htn4IKxgLl3Q&s" alt="Speakers" className="img-bottom" />
      </div>
    </section>
  );
};

export default Pitching;