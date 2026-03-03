  import React from "react";
  // Import Bootstrap CSS
  import 'bootstrap/dist/css/bootstrap.min.css';
  // Import Bootstrap JS for interactive components (like navbar toggle)
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';

  import "./App.css";

  // Components
  import Navbar from "./Navbar/Navbar"; 
  import Home from "./Homepage/Home";
  import AboutSection from "./Aboutsection/AboutSection";
  import GetInvolved from "./GetInvolved/GetInvolved";
  import MediaPresence from "./Media/MediaPresence";
  import SpeakerSection from "./Speaker/SpeakerSection";
  import PanelDiscussion from "./panel/PanelDiscussion";
  import WorkshopSeminar from "./Workshop/WorkshopSeminar";
  import Pitching from "./Pitching/pitching"; 
  import FeatureCard from "./FeatureCard/FeatureCard"; 
  import Footer from "./Footer/Footer";



  function App() {
    return (
      <>
              <Navbar />
              <Home />
              <AboutSection />
              <GetInvolved />
              <MediaPresence />
              <SpeakerSection />
              <PanelDiscussion />
              <WorkshopSeminar />
              <Pitching/>
              <FeatureCard />
              <Footer/>
      </>
    );
  }
  export default App;