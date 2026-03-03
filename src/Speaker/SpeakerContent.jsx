import FeatureCard from "../FeatureCard/FeatureCard";

function SpeakerContent() {
  const features = [
    { title: "Establish Authority", icon: "🎗️" },
    { title: "Network with Industry Giants", icon: "👥" },
    { title: "Showcase Innovative Projects", icon: "💡" },
    { title: "Drive Business Growth", icon: "📈" },
    { title: "Attract Media Attention", icon: "📡" },
    { title: "Engage with a Global Audience", icon: "🌐" },
    { title: "Learn from Fellow Experts", icon: "💼" },
    { title: "Enhance Your Personal Brand", icon: "👤" }
  ];

  return (
    <div className="speaker-content">
      <p className="session-text">Session</p>

      <h2>AI Speaker</h2>

      <p className="description">
        Step onto the global stage at the World AI Technology Expo and let
        your expertise take the spotlight. Share your insights with top
        industry professionals and connect with innovators shaping tomorrow.
        Your voice matters; make it count.
      </p>

      <h4>Want to become a speaker?</h4>

      <div className="buttons">
        <button className="primary-btn">Register Now ↗</button>
        <button className="secondary-btn">Chat Now →</button>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <FeatureCard 
            key={index}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakerContent;