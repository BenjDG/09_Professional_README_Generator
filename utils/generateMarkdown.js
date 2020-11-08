// function to generate markdown for README
function generateMarkdown(data) {
  //console.dir(data);
  return `
  ${data.projectTitle}
  ${data.projectDescription}
  ${data.projectInstall}
  ${data.projectUsage}
  ${data.projectLicense}
  ${data.projectContribute}
  ${data.projectTest}
  ${data.projectEmail}




#  <<"TITLE">>

<<"Badge of License">>
<br/>

<<"Description">>

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

<<"Directions">>

<br/>
<br/>

## Usage

<<"Directions">>


<br/>
<br/>


## License

<<"License">>

<br/>
<br/>

## Contributing

<<"Directions">>

<br/>
<br/>

## Tests

<<"Directions">>

<br/>
<br/>

## Questions

My GitHub Profile  
<<"link to GitHub profile">>  
  
Please direct questions to <<"email address">>.  
<<"email address">>  
`;
}

module.exports = generateMarkdown;
