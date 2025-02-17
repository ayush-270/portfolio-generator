import React, { useState } from "react";
import PortfolioForm from "./PortfolioForm";
import TemplateSelection from "./TemplateSelection";
import LivePreview from "./LivePreview";

const PortfolioBuilder = () => {
  // Store user data from the form; initially empty
  const [userData, setUserData] = useState({
    name: "",
    bio: "",
    skills: [],
    projects: [],
    socialLinks: {},
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Callback to update user data from the form
  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <PortfolioForm updateUserData={updateUserData} />
      <TemplateSelection
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <LivePreview userData={userData} selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default PortfolioBuilder;
