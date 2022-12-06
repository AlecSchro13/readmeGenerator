// TODO: Include packages needed for this application;
const inquirer = require('inquirer');
const fse = require('fs-extra');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Enter A Description!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        message: 'What license will you be using for you repository?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'none of the above'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log("");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How do you install the application?',
        name: 'install',
        validate: your_install => {
            if (your_install) {
                return true;
            } else {
                console.log('explain how to install the application please');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Congrats! here is a README file.');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userinput) {
            console.log(userinput)
            writeToFile('README.md', generateMarkdown(userinput));
        });
};

// Function call to initialize app
init();
