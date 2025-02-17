// src/components/PortfolioForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PortfolioForm = ({ updateUserData }) => {
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

  // Update parent with current form data whenever any state changes
  useEffect(() => {
    updateUserData({
      name,
      bio,
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill),
      projects,
      socialLinks,
    });
  }, [name, bio, skills, projects, socialLinks, updateUserData]);

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", link: "" }]);
  };

  const handleProjectChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjects(newProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, you can save data to the backend here as well.
    axios
      .post("http://localhost:5000/api/portfolio/save", {
        name,
        bio,
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill),
        projects,
        socialLinks,
      })
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
      <h2 className="fade-in">Create Your Portfolio</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control form-control-dark"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control form-control-dark"
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
            className="form-control form-control-dark"
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
                  className="form-control form-control-dark"
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
                  className="form-control form-control-dark"
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
                  className="form-control form-control-dark"
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
            className="btn btn-dark-custom"
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
              className="form-control form-control-dark"
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
              className="form-control form-control-dark"
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
              className="form-control form-control-dark"
              value={socialLinks.twitter}
              onChange={(e) =>
                setSocialLinks({ ...socialLinks, twitter: e.target.value })
              }
              placeholder="Twitter URL"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark-custom">
          Save Portfolio
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
