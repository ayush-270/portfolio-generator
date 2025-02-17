import React from "react";
import { templates } from "../templates";
import { renderTemplate } from "../utils/renderTemplate";

const LivePreview = ({ userData, selectedTemplate }) => {
  // Find the selected template
  const template = templates.find((t) => t.id === selectedTemplate);
  if (!template) {
    return (
      <div className="container mt-5">
        <p>Please select a template to see a preview.</p>
      </div>
    );
  }

  // Render the template with userData
  const previewHtml = renderTemplate(template.html, userData);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Live Preview</h2>
      {/* Render the preview HTML */}
      <div
        dangerouslySetInnerHTML={{ __html: previewHtml }}
        className="border p-3"
      />
    </div>
  );
};

export default LivePreview;
