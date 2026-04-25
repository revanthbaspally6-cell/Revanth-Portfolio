import { useEffect, useState } from "react";

// Default certifications if DB is empty
const DEFAULT_CERTIFICATIONS = [
  {
    _id: "1",
    title: "Tech Savishkaar 4.0",
    issuer: "Vasavi College of Engineering",
    date: "2025",
    category: "Participation",
    description: "Technical event organised by VCE, Hyderabad."
  },
  {
    _id: "2",
    title: "Turing Cup 2K26",
    issuer: "VNR VJIET — Dept. of CSE",
    date: "2026",
    category: "Coding Contest",
    description: "National Level Coding Contest. Team: Logic Titans."
  },
  {
    _id: "3",
    title: "Intro to Generative AI",
    issuer: "IBM SkillsBuild",
    date: "Feb 2026",
    category: "Professional",
    description: "4-hour course on Generative AI fundamentals."
  },
  {
    _id: "4",
    title: "CCNA: Intro to Networks",
    issuer: "Cisco Networking Academy",
    date: "Apr 2026",
    category: "Networking",
    description: "CCNA via Vasavi College of Engineering."
  }
];

// Badge colors based on category
const getBadgeColor = (category) => {
  switch(category) {
    case "Participation": return "#667eea";
    case "Coding Contest": return "#f59e0b";
    case "Professional": return "#10b981";
    case "Networking": return "#8b5cf6";
    default: return "#667eea";
  }
};

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/certifications")
      .then(res => res.json())
      .then(data => {
        setCertifications(data.length > 0 ? data : DEFAULT_CERTIFICATIONS);
        setLoading(false);
      })
      .catch(err => {
        console.log("Using default certifications");
        setCertifications(DEFAULT_CERTIFICATIONS);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="certifications-container"><p>Loading...</p></div>;

  return (
    <div className="certifications-container">
      <h2>My Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div key={cert._id} className="certification-card">
            <div className="cert-header">
              <span className="cert-badge" style={{background: getBadgeColor(cert.category)}}>
                {cert.category}
              </span>
              <span className="cert-date">📅 {cert.date}</span>
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">🏢 {cert.issuer}</p>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
