import { useEffect, useState } from "react";

// Default projects if DB is empty
const DEFAULT_PROJECTS = [
  {
    _id: "1",
    title: "MERN Portfolio",
    description: "A full-stack portfolio website built with MongoDB, Express, React, and Node.js showcasing my projects and skills."
  },
  {
    _id: "2",
    title: "E-Commerce Platform",
    description: "A complete e-commerce solution with product management, cart functionality, and payment integration."
  },
  {
    _id: "3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features."
  },
  {
    _id: "4",
    title: "Weather Dashboard",
    description: "A weather forecasting dashboard integrating real-time API data with interactive visualizations."
  }
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data.length > 0 ? data : DEFAULT_PROJECTS);
        setLoading(false);
      })
      .catch(err => {
        console.log("Using default projects");
        setProjects(DEFAULT_PROJECTS);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="projects-container"><p>Loading...</p></div>;

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project._id} className="project-card">
            <h3>💻 {project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
