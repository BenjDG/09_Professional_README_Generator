const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Type a description of the project:',
        name: 'projectDescription'
    },
    {
        type: 'input',
        message: 'Type instructions on how to install the project:',
        name: 'projectInstall'
    },
    {
        type: 'input',
        message: 'Type instructions on how to use the project:',
        name: 'projectUsage'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0'],
        name: 'projectLicense'
    },
    {
        type: 'input',
        message: 'Type how to contribute to the project:',
        name: 'projectContribute'
    },
    {
        type: 'input',
        message: 'Type how to test the project:',
        name: 'projectTest'
    },
    {
        type: 'input',
        message: 'Type your GitHub username:',
        name: 'projectGitHub'
    },
    {
        type: 'input',
        message: 'Type an email address to contact for the project:',
        name: 'projectEmail'
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile(
        './output/README.md',
        data,
        (err) => {
            if (err) throw err;
            console.log('The file has been saved!')
        });
};

async function getUserInput() {
    let response = await inquirer.prompt(questions);
    if (response) {
        if(response.projectLicense === 'MIT'){
            response.badge = '![MIT license](https://img.shields.io/badge/license-MIT-green)';
            response.licenseURL = 'https://choosealicense.com/licenses/mit/';
        };
        if(response.projectLicense === 'GNU GPLv3'){
            response.badge ='![GNU GPLv3 license](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)';
            response.licenseURL = 'https://choosealicense.com/licenses/gpl-3.0/';
        };
        if(response.projectLicense === 'Apache License 2.0'){
            response.badge ='![Apache 2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue)';
            response.licenseURL = 'https://choosealicense.com/licenses/apache-2.0/';
        };
        writeToFile(generate(response));
    }
};

// function to initialize program
function init() {
getUserInput();
};

// function call to initialize program
init();
