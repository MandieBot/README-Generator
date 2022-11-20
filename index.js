// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
    message: "Please provide a brief description explaining the what, why, and how of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have? (Use arrow keys to select option)",
    choices: ["MIT", "APACHE_2.0", "BSD_3--Clause", "NONE"],
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README File...");
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
