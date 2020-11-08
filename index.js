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
        type: 'input',
        message: 'Choose a license:',
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
        name: 'projectTest'
    },
    {
        type: 'input',
        message: 'Type an email address to contact for the project:',
        name: 'projectEmail'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    //console.log('filename>>' + fileName);
    //console.log('data>>' + data);
}

async function getUserInput() {
    let response = await inquirer.prompt(questions);
    
    if(response) {
        //console.dir(response);
        generate(response);
    }
}

getUserInput();

// // function to initialize program
// function init() {


// writeToFile('test.md', generate('data'));
// }

// // function call to initialize program
//init();
