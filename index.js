// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know when contributing?",
        name: "contribution",
    }, 
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ['Boost','Apache-2.0','MIT', 'None']
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("generating README file");
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
