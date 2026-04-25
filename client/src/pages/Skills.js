import { useEffect, useState } from "react";

// Default skills if DB is empty
const DEFAULT_SKILLS = [
  { _id: "1", name: "MongoDB" },
  { _id: "2", name: "Express.js" },
  { _id: "3", name: "React" },
  { _id: "4", name: "Node.js" },
  { _id: "5", name: "JavaScript" },
  { _id: "6", name: "HTML & CSS" },
  { _id: "7", name: "REST APIs" },
  { _id: "8", name: "Git & GitHub" }
];

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then(res => res.json())
      .then(data => {
        setSkills(data.length > 0 ? data : DEFAULT_SKILLS);
        setLoading(false);
      })
      .catch(err => {
        console.log("Using default skills");
        setSkills(DEFAULT_SKILLS);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="skills-container"><p>Loading...</p></div>;

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill._id} className="skill-card">
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
