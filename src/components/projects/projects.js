import "./projects.css";
import pmcol from "../../assets/pmcol.png";
import autoMaker from "../../assets/autoMarker.png";
import socialDistribution from "../../assets/socialDistribution.png";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PMCOLympics",
      image: pmcol,
      short: "A web app to make pharmacology learning more interactive.",
      description:
        "PMCOLympics is a team project built to make pharmacology learning more interactive. I worked on question generation, backend logic, and making different parts of the system work together.",
      tech: "React, Django, PostgreSQL, Celery, Redis",
      links: {
        design:
          "https://ualberta-cmput401.github.io/f25project-DeptofPharmacology/",
        live: "https://pmcoltest.buxtonlabs.com/",
      },
    },
    {
      id: 2,
      title: "Social Distribution",
      image: socialDistribution, // replace with your image later
      short: "A federated social media platform.",
      description:
        "A distributed social media platform where users can interact across different servers. The UI was built using Bootstrap, and I worked on backend features, API design, and handling communication between nodes. This involved implementing features like posts, user interactions, and ensuring data could be shared reliably across different servers.",
      tech: "Django, REST API",
      links: {
        github:"https://github.com/Sandhya-ad/social_distrubution",
        video: "https://youtu.be/1HblC3OBldk?si=ogMRK9JtM6aEjt57",
      },
    },
    {
      id: 3,
      title: "AutoMarker",
      image: autoMaker, // replace with your image later
      short: "Automatically grades MCQ PDFs.",
      description:
        "A tool that grades multiple-choice PDFs automatically. Focused on parsing, handling edge cases, and improving grading accuracy.",
      tech: "Django, Celery, Redis",
      links: {
        github: "https://github.com/Sandhya-ad/c398-grader",
      },
    },
  ];

  return (
    <section id="projects">
      <h2 className="projectsTitle">My projects</h2>
      <div className="projectsWrapper">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card-container"
            onClick={() => setSelectedProject(project)}
          >
            <div className="upper-container">
              <img
                src={project.image}
                alt="project"
                className="project-image"
              />
            </div>

            <div className="lower-container">
              <h3>{project.title}</h3>
              <p>{project.short}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-image-container">
              <img
                src={selectedProject.image}
                alt="project"
                className="project-image"
              />
            </div>

            <div className="modal-content">
              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.description}</p>
              <p><strong>Tech:</strong> {selectedProject.tech}</p>

              <div className="links">
                {selectedProject.links.design && (
                  <a
                    href={selectedProject.links.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                  >
                    Design
                  </a>
                )}

                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Site
                  </a>
                )}

                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.links.video && (
                  <a
                    href={selectedProject.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn" 
                  >
                    Video
                  </a>
                )}
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;