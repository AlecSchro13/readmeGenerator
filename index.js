// TODO: Include packages needed for this application;
const inquirer = require('inquirer');
const fse = require('fs-extra');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter A Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the description of your application?',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'What license will you be using for you repository?',
        name: 'license',
        choices: ['MIT', ''],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }, 
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
