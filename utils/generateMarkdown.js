// function to generate markdown for README
function generateMarkdown(data) {
  //console.dir(data);
  return `
#  ${data.projectTitle}

${data.badge}

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

If you have questions you can send me a message in GitHub or to my email address.  

My GitHub profile is [${data.projectGitHub}](https://github.com/${data.projectGitHub})  
  
Email: ${data.projectEmail}.  
`;
}

module.exports = generateMarkdown;
