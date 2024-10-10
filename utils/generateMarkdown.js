
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Artistic-2.0":
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]`;
    case "BSD-3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "CC0":
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
    case "WTFPL":
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
    case "EPL-1.0":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    case "AGPL-3.0":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    case "GPL-3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case "LGPL-3.0":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "MPL-2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case "OFL-1.1":
      return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`;
    case "Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    case "Zlib":
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]`;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Artistic-2.0":
      return `(https://opensource.org/licenses/Artistic-2.0)`;
    case "BSD-3-Clause":
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    case "CC0":
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "WTFPL":
      return `(http://www.wtfpl.net/about/)`;
    case "EPL-1.0":
      return `(https://opensource.org/licenses/EPL-1.0)`;
    case "AGPL-3.0":
      return `(https://opensource.org/licenses/EPL-1.0)`
    case "GPL-3.0":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case "LGPL-3.0":
      return `(https://www.gnu.org/licenses/lgpl-3.0)`;
    case "ISC":
      return `(https://opensource.org/licenses/ISC)`;
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`;
    case "MPL-2.0":
      return `(https://opensource.org/licenses/MPL-2.0)`;
    case "OFL-1.1":
      return `(https://opensource.org/licenses/OFL-1.1)`;
    case "Unlicense":
      return `(http://unlicense.org/)`;
    case "Zlib":
      return `(http://www.wtfpl.net/about/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "N/A"){
    return `## License 
${license}`;
  } else `${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation Instructions
\`\`\`bash
${data.install}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Tests
\`\`\`bash
${data.test}
\`\`\`

## Questions
If you have any questions, please contact me at:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

export default generateMarkdown;
