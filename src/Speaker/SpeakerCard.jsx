import React from 'react';
import './SpeakerCard.css';

const SpeakerCard = ({ name, role, company, imageUrl }) => (
  <div className="card">
    <div className="image-wrapper">
      <img src={imageUrl} alt={name} />
      <div className="name-tag">{name}</div>
    </div>
    <div className="content">
      <h4 className="company">{company}</h4>
      <p className="role">{role}</p>
    </div>
  </div>
);


const SpeakersPage = () => {
  const speakers = [
    {
      id: 1,
      name: "Vithi Agarwal",
      company: "Meta / NIFT",
      role: "Sr. Advisor | Ex-Director | Guest Faculty",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      name: "Tanmay Singh Sahni",
      company: "Google",
      role: "Security Engineer, Risk & Compliance",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      id: 3,
      name: "Dr. Pramod K. Maurya",
      company: "Al-Futtaim",
      role: "Sr. Manager, Analytics & Digital Transformation",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 4,
      name: "Nishtha Malhotra",
      company: "MasterCard",
      role: "Manager, Cybersecurity",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      id: 5,
      name: "Rahul Verma",
      company: "Microsoft",
      role: "Cloud Solutions Architect",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      id: 6,
      name: "Ananya Sharma",
      company: "Amazon",
      role: "Product Manager",
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
    },
    {
      id: 7,
      name: "Karan Mehta",
      company: "Deloitte",
      role: "Technology Consultant",
      imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296"
    },
    {
      id: 8,
      name: "Sneha Reddy",
      company: "TCS",
      role: "AI & Data Science Lead",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
  ];

  return (
    <div className="page-wrapper">
      <header className="header">
        <span className="subtitle">Meet Our Expert Speakers</span>
        <h1 className="title">Expert Speakers</h1>
      </header>

      <div className="grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>

      <footer className="footer">
        <button className="btn">View More</button>
      </footer>
    </div>
  );
};

export default SpeakersPage;