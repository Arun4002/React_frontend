import "./MediaPresence.css";
const MediaPresence = () => {
  const logos = [
{
      name: "Financial Services Review",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuubSiLURehxsEQ3F7M5JrvyaUPfVDwKcww&s"
    },
    {
      name: "Silicon India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pfz25IexQ4FXt23UuQSzpV2VgB2iVbsOQQ&s"
    },
    {
      name: "CIO Review",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qXMx-nQV2-p5_bqFF4klgU32PyxKzyvUOw&s"
    },
    {
      name: "Seedicon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIabmxshqABM_LV_cxiNzJ0yIMCijb0JY-_IR3uMFluQ&s"
    },
    {
      name: "Spicos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPAM1UqCD28VUEk2-Bx4Oi8Vk7GnIeIsJOg&s"
    },
    {
      name: "AI Tech Trend",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKhociQazy34-y9zD652MI7Vlms3yWpR28w&s"
    },
    {
      name: "Dubai Leaders",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhVFnnPe1c95wz22-nrbFs0uKLqlPNl-lqA&s"
    },
    {
      name: "Arab CEO Magazine",
      img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI78VGiXdeE-5nqbEuNgLvUyba1gE4a6-0Kg&s"
    },
    {
      name: "The Silicon Leaders",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRHaZqXj930hhDknytXI7rkVUI5ceSZJ4Ww&s"
    },
    {
      name: "Middle East Leader",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQC35DrJw-0l6qat-ea_lbWakqsOYppaN2A&s"
    },
  
   
  ];

  return (
    <section className="media-section">
      <div className="media-container">
        <p className="media-subtitle">Media</p>
        <h2 className="media-title">Presence</h2>

        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-card">
              <img src={logo.img} alt={logo.name} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MediaPresence;