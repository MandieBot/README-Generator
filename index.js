// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "project",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have? (Use arrow keys to select option)",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies? (npm i)",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be entered to run tests? (npm test)",
  },
  {
    type: "input",
    name: "usage",
    message: "How will the user access the repo? (Answer the prompts)",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
