function FeatureCard({ title, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <p className="feature-title">{title}</p>
    </div>
  );
}

export default FeatureCard;

