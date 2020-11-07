const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: input,
        message: "What is the title of the project?",
        name: projectTitle
    },
    {
        type: input,
        message: "Type a description of the project:",
        name: projectDescription
    },
    {
        type: input,
        message: "Type instructions on how to install the project:",
        name: projectInstall
    },
    {
        type: input,
        message: "Type instructions on how to use the project:",
        name: projectUsage
    },
    {
        type: input,
        message: "Choose a license:",
        name: projectLicense
    },
    {
        type: input,
        message: "Type how to contribute to the project:",
        name: projectContribute
    },
    {
        type: input,
        message: "Type how to test the project:",
        name: projectTest
    },
    {
        type: input,
        message: "Type your GitHub username:",
        name: projectTest
    },
    {
        type: input,
        message: "Type an email address to contact for the project:",
        name: projectEmail
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

async function getUserInput() {
    let response = await inquirer.prompt(questions)
    
}

// function to initialize program
function init() {



}

// function call to initialize program
init();
