import React from "react";
import { templates } from "../templates";

const TemplateSelection = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Select a Template</h2>
      <div className="row">
        {templates.map((template) => (
          <div key={template.id} className="col-md-6 mb-3">
            <div
              className={`card card-dark-template ${
                selectedTemplate === template.id ? "border-primary" : ""
              }`}
              onClick={() => setSelectedTemplate(template.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{template.name}</h5>
                <p className="card-text">
                  A brief description of the {template.name} template.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
