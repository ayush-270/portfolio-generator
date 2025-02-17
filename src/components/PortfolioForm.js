import React, { useState } from "react";
import axios from "axios";

const PortfolioForm = () => {
  // State to hold form data
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState([
    { title: "", description: "", link: "" },
  ]);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    github: "",
    twitter: "",
  });
  const [message, setMessage] = useState("");

  // Handle adding a new project input row
  const addProject = () => {
    setProjects([...projects, { title: "", description: "", link: "" }]);
  };

  // Handle project input change
  const handleProjectChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjects(newProjects);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare skills array from comma-separated input
    const skillsArray = skills.split(",").map((skill) => skill.trim());

    // Prepare data
    const portfolioData = {
      name,
      bio,
      skills: skillsArray,
      projects,
      socialLinks,
    };

    // Send data to backend API
    axios
      .post("http://localhost:5000/api/portfolio/save", portfolioData)
      .then((response) => {
        setMessage("Portfolio saved successfully! ID: " + response.data.id);
      })
      .catch((error) => {
        console.error("Error saving portfolio:", error);
        setMessage("Error saving portfolio");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Your Portfolio</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Skills (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. JavaScript, React, Node.js"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Projects</label>
          {projects.map((project, index) => (
            <div key={index} className="border p-3 mb-3">
              <div className="mb-2">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  placeholder="Project title"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  placeholder="Project description"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, e)}
                  placeholder="Project link"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addProject}
          >
            Add Another Project
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Social Links</label>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              value={socialLinks.linkedin}
              onChange={(e) =>
                setSocialLinks({ ...socialLinks, linkedin: e.target.value })
              }
              placeholder="LinkedIn URL"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              value={socialLinks.github}
              onChange={(e) =>
                setSocialLinks({ ...socialLinks, github: e.target.value })
              }
              placeholder="GitHub URL"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              value={socialLinks.twitter}
              onChange={(e) =>
                setSocialLinks({ ...socialLinks, twitter: e.target.value })
              }
              placeholder="Twitter URL"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Portfolio
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
