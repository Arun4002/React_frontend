import SpeakerContent from "./SpeakerContent";
import "./speaker.css";

function SpeakerSection() {
  return (
    <section className="speaker-section">
      <div className="speaker-container">

        {/* IMAGES (Merged Here) */}
        <div className="speaker-images">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="Main Speaker"
            className="main-img"
          />

          <div className="small-images">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              alt="Speaker 1"
            />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Speaker 2"
            />
          </div>
        </div>

        {/* Content Component */}
        <SpeakerContent />

      </div>
    </section>
  );
}

export default SpeakerSection;