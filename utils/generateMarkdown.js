// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![badge](https:img.shields.io/badge/license-${answers.license}-blue.svg)]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <h1 align="center">${data.title} 👋</h1>

  ## Licenses: 
![badge](https:img.shields.io/badge/license-${data.license}-blue.svg)
🔍 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#use)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description:
${data.description}
## Installation
${data.installation}
## Usage
${data.use}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application uses the ${data.license} license. 
## Contributing
${data.contribution}
## Tests
${data.tests}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
