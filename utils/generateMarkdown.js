// function to generate markdown for README
function generateMarkdown(data) {
  //console.dir(data);
  return `
#  ${data.projectTitle}

${data.projectLicense}
<br/>

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

${data.projectLicense}

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

My GitHub Profile  
${data.projectGitHub} 
  
Please direct questions to <<"email address">>.  
${data.projectEmail}
`;
}

module.exports = generateMarkdown;
