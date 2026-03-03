import "./GetInvolved.css";

function GetInvolved() {
  const items = [
  { title: "Panel Discussion", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
  { title: "Startup Pitching", img: "https://static.wixstatic.com/media/727cb6_669c7f101ff14ac0b33005f8fbc9e1d6~mv2.jpg/v1/fill/w_752,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/727cb6_669c7f101ff14ac0b33005f8fbc9e1d6~mv2.jpg" },
  { title: "FutureTech Innovations", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47uWRI_kTKhrrV1i2lOKCf79pOapLv8pAZA&s" },
  { title: "Ask Questions", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80" },
  { title: "Product Launch", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80" },
  { title: "Speaker Session", img: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=800&q=80" },
  { title: "Networking", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" },
  {title: "AI Conference",img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
  {title: "Tech Workshop", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
]; 

  return (
    <section className="involved-section">
      <div className="overlay"></div>

      <div className="involved-container">
        <p className="small-title">JOIN IN</p>
        <h2>Get involved</h2>

        <div className="grid-container">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.img} alt={item.title} />
              <div className="item-overlay">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;