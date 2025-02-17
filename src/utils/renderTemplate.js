export const renderTemplate = (templateHtml, userData) => {
  let output = templateHtml;

  // Replace simple placeholders
  output = output.replace(/{{name}}/g, userData.name || "");
  output = output.replace(/{{bio}}/g, userData.bio || "");

  // Replace skills: generate interactive cards for skills
  const skillsHtml =
    userData.skills && userData.skills.length
      ? userData.skills
          .map(
            (skill) =>
              `<div class="col-md-3"><div class="skill-card text-center">${skill}</div></div>`
          )
          .join("")
      : "<p>No skills provided.</p>";
  output = output.replace(/{{skills}}/g, skillsHtml);

  // Replace projects: generate card layouts for projects
  const projectsHtml =
    userData.projects && userData.projects.length
      ? userData.projects
          .map(
            (project) =>
              `<div class="col-md-4">
             <div class="card project-card mb-3">
               <div class="card-body">
                 <h5 class="card-title">${project.title}</h5>
                 <p class="card-text">${project.description || ""}</p>
                 ${
                   project.link
                     ? `<a href="${project.link}" target="_blank" class="btn btn-primary btn-sm">View Project</a>`
                     : ""
                 }
               </div>
             </div>
           </div>`
          )
          .join("")
      : "<p>No projects provided.</p>";
  output = output.replace(/{{projects}}/g, projectsHtml);

  // Replace socialLinks (only for Template 4)
  const socialLinksHtml = userData.socialLinks
    ? Object.entries(userData.socialLinks)
        .filter(([key, value]) => value)
        .map(
          ([key, value]) =>
            `<p><strong>${key}:</strong> <a href="${value}" target="_blank">${value}</a></p>`
        )
        .join("")
    : "";
  output = output.replace(/{{socialLinks}}/g, socialLinksHtml);

  return output;
};
