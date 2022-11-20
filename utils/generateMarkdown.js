// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `[License](#License)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `## License
    This project is licensed under ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.project}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * Usage 
  * License
  * Contributions
  * Tests
  * [Questions](#Questions)

  ## Installation
  Enter command ${data.dependencies} to install dependencies.
  ## Usage
  ${data.usage} 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}\n
  ## Contributions
  N/A
  ## Tests
  Enter command ${data.tests} to run tests and debug.
  ## Questions
  [${data.username}](https://github.com/MandieBot)\n
  For additional information, please reach out to ${data.email}.
  `;
}

module.exports = generateMarkdown;
