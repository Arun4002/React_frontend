import React from 'react';
import './FeatureSections.css';

const FeatureSection = ({ title, highlight, description, benefits, images, reverse }) => {
  return (
    <section className={`fs-section ${reverse ? 'fs-reverse' : ''}`}>
      <div className="fs-container">
        {/* Image Mosaic */}
        <div className="fs-image-mosaic">
          <div className="fs-img-card fs-img-1">
            <img src={images[0]} alt="Feature 1" />
          </div>
          <div className="fs-img-card fs-img-2">
            <img src={images[1]} alt="Feature 2" />
          </div>
          <div className="fs-img-card fs-img-3">
            <img src={images[2]} alt="Feature 3" />
          </div>
        </div>

        {/* Content */}
        <div className="fs-content">
          <h1 className="fs-headline">
            {title} <span className="fs-accent">{highlight}</span>
          </h1>
          <p className="fs-subtext">{description}</p>

          <div className="fs-benefit-grid">
            {benefits.map((item, index) => (
              <div key={index} className="fs-benefit-item">
                {/* The emoji is placed here */}
                <div className="fs-emoji-box">{item.icon}</div>
                <span className="fs-benefit-label">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="fs-actions">
            <button className="fs-btn-primary">Register Now ↗</button>
            <button className="fs-btn-link">Chat Now →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSections = () => {
  const startupData = {
    title: "Startup",
    highlight: "Pitching",
    description: "Seize the chance to pitch your startup at the World AI Technology Expo. Showcase your ideas to top leaders and investors in the AI space. Capture the attention of industry giants and stand out where it matters.",
    reverse: true, 
    images: [
      "https://picsum.photos/id/60/300/400", 
      "https://picsum.photos/id/64/300/300", 
      "https://picsum.photos/id/101/400/350"
    ],
    benefits: [
      { icon: "👥", text: "Direct Access to Top Investors" },
      { icon: "🤝", text: "Network with Industry Leaders" },
      { icon: "💡", text: "Showcase Your Innovation" },
      { icon: "💬", text: "Receive Constructive Feedback" },
      { icon: "📡", text: "Generate Buzz and Publicity" },
      { icon: "💼", text: "Learn from the Best" },
      { icon: "🌐", text: "Gain Media Exposure" },
      { icon: "📈", text: "Expand Your Horizons" },
    ]
  };

  return (
    <div className="fs-wrapper">
      <FeatureSection {...startupData} />
    </div>
  );
};

export default FeatureSections;