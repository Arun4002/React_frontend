import { Globe, IdCard, Mic2 } from "lucide-react";
import "./AboutSection.css";

function AboutExpo() {
  return (
    
    <section className="expo-section py-5 bg-white position-relative overflow-hidden">
      {/* Perspective Grid Background */}
      <div className="grid-overlay"></div>
      
      {/* Decorative Rocket Icon */}
      <div className="rocket-icon">
        <img src="rocket-outline.png" alt="rocket" style={{ width: '80px', opacity: 0.3 }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h6 className="text-uppercase text-primary fw-bold mb-3">About World AI Expo</h6>
            <h1 className="display-5 fw-bold mb-4">
              World AI Technology Expo <span className="text-primary">UAE 2025</span>
            </h1>
            <p className="text-muted mb-4">
              The World AI Expo Dubai 2025 stands as the largest and most comprehensive AI Show & AI Conference globally....
            </p>
            <p className="text-muted mb-4">
              Connect directly with AI leaders from over 20 countries and catapult your career to the next level. 
            </p>
            
            <button className="btn btn-primary btn-lg px-4 mb-5 fw-medium shadow-sm border-0" style={{ backgroundColor: '#3b66ff' }}>
              Book Ticket
            </button>

            {/* STATS SECTION */}
            <div className="row g-3">
              <div className="col-md-4">
                <div className="stat-card blue-bg p-3 rounded-3 shadow-sm border">
                  <Globe size={32} className="text-primary mb-2" />
                  <h3 className="fw-bold mb-0">50+</h3>
                  <small className="text-muted">Countries</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-card purple-bg p-3 rounded-3 shadow-sm border">
                  <Mic2 size={32} className="text-purple mb-2" />
                  <h3 className="fw-bold mb-0">30+</h3>
                  <small className="text-muted">Speakers</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-card green-bg p-3 rounded-3 shadow-sm border">
                  <IdCard size={32} className="text-success mb-2" />
                  <h3 className="fw-bold mb-0">1,000+</h3>
                  <small className="text-muted">Visitors</small>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (Overlapping Images) */}
          <div className="col-lg-6">
  <div className="image-grid-container position-relative width-583px">
    {/* Main Top Image - 583px wide in your mockup */}
    <div className="img-main mb-4">
      <img 
        src="About1.png" 
        className="custom-img-large shadow" 
        alt="AI Panel" 
      />
    </div>
    
    {/* Bottom Two Images - side by side */}
    <div className="d-flex gap-4">
      <img 
        src="About2.png" 
        className="custom-img-small shadow"  
        alt="Speaker" 
      />
      <img 
        src="About3.png" 
        className="custom-img-small shadow" 
        alt="Presentation" 
      />
    </div>

    {/* The blue dotted line from the image */}
    <div className="blue-connector"></div>
  </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutExpo;