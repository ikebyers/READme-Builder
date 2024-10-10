// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import genMd from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: `Project title:`,
        name: "title"
    },
    {
        type: "input",
        message: `Project description:`,
        name: "description"
    },
    {
        type: "input",
        message: `Installation instructions:`,
        name: "install"
    },
    {
        type: "input",
        message: `Usage instructions:`,
        name: "usage"
    },
    {
        type: "list",
        message: `License type:`,
        choices: [
            "Artistic-2.0",
            "BSD-3-Clause",
            "CC0",
            "WTFPL",
            "EPL-1.0",
            "AGPL-3.0",
            "GPL-3.0",
            "LGPL-3.0",
            "ISC",
            "MIT",
            "MPL-2.0",
            "OFL-1.1",
            "Unlicense",
            "Zlib"
        ],
        name: "license"
    },
    {
        type: "input",
        message: `Contributions and credits:`,
        name: "credits"
    },
    {
        type: "input",
        message: `Test instructions:`,
        name: "test"
    },
    {
        type: "input",
        message: `Enter your GitHub Username:`,
        name: "githubUsername"
    },
    {
        type: "input",
        message: `Enter your email:`,
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log(`READme for ${data.title} Generated!`)
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(`${response.title}.md`, genMd(response)
        )
    });
};


// Function call to initialize app
init();
