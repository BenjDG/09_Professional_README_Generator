// function to generate markdown for README
function generateMarkdown(data) {
  return `
#  ${data.projectTitle}

${data.badge}

${data.projectDescription}

<br/>
<br/>

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

<br/>
<br/>

## Installation

${data.projectInstall}

<br/>
<br/>

## Usage

${data.projectUsage}


<br/>
<br/>


## License

[${data.projectLicense}](${data.licenseURL})

<br/>
<br/>

## Contributing

${data.projectContribute}

<br/>
<br/>

## Tests

${data.projectTest}

<br/>
<br/>

## Questions  

If you have questions about the project you can email me, or you can open an issue in the GitHub repository.

My GitHub profile is [${data.projectGitHub}](https://github.com/${data.projectGitHub})  
  
Email: ${data.projectEmail}.  
`;
}

module.exports = generateMarkdown;
