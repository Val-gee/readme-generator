// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } 
  return ""
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Boost'){
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == 'Apache-2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `  ## License`
  }
  return ''
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Username](#username)
  - [Email](#email)
  ## Installation 
  This is a step by step instruction on how to get the development environment running.
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contribution 
  ${data.contribution}
  ## Test 
  ${data.test}
  \n${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Username 
  This is my GitHub username:
  ${data.username}
  ## Email 
  This is my email address:
  ${data.email}

`
}

module.exports = generateMarkdown;
