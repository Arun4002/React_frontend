import "./PanelDiscussion.css";

function PanelDiscussion() {
  const features = [
    { icon: "🌟", text: "Enhance Your Personal Brand" },
    { icon: "🤝", text: "Expand Your Professional Network" },
    { icon: "📊", text: "Gain Industry Insights" },
    { icon: "🎤", text: "Showcase Your Expertise" },
    { icon: "🔥", text: "Generate Buzz and Publicity" },
    { icon: "🚀", text: "Drive Traffic to Your Business" },
    { icon: "📝", text: "Receive Constructive Feedback" },
    { icon: "📱", text: "Increase Social Media Engagement" }
  ];

  return (
    <section className="panel-section">
      <div className="panel-container">

        {/* LEFT CONTENT */}
        <div className="panel-left">
          <h2>
            Panel <span>Discussion</span>
          </h2>

          <p className="panel-description">
            Participating in a panel discussion at the World AI Expo is an
            unparalleled opportunity. This annual event attracts the brightest
            minds and most influential leaders in the AI space. Speaking on a
            panel can amplify your brand, expand your network, and position you
            as a thought leader in the industry.
          </p>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-box">
                <span className="feature-icon">{item.icon}</span>
                <span className="feature-text">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="panel-buttons">
            <button className="primary-btn">Register Now</button>
            <button className="secondary-btn">Chat Now →</button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="panel-right">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            
          />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
            
          />
         
        </div>

      </div>
    </section>
  );
}

export default PanelDiscussion;