const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");

const questions =
    [
        {
            type: 'input',
            name: 'name',
            message: "Team Manager's Name:",
        },
        {
            type: 'input',
            name: 'ID',
            message: "Employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Email Address:",
        },
        {
            type: 'input',
            name: 'office',
            message: "Office Number:",
        },
        {
            type: 'list',
            name: 'add',
            message: "Add an Engineer, Intern, or Team Complete?",
            choices: ["Add Engineer", "Add Intern", "I'm done adding"]
        },
    ]

const engineerQuestions =
[
    {
        type: 'input',
        name: 'name',
        message: "Employee Name:",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Employee ID:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee's Email address:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Employee's GitHub username:",
    },
    {
        type: 'list',
        name: 'add',
        message: "Add an Engineer, Intern, or Team Complete?",
        choices: ["Add Engineer", "Add Intern", "I'm done adding"]
    },
]

const internQuestions =
[
    {
        type: 'input',
        name: 'name',
        message: "Intern Name:",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Employee ID:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Intern's Email address:"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did the Intern attend/is attenting?",
    },
    {
        type: 'list',
        name: 'add',
        message: "Add an Engineer, Intern, or Team Complete?",
        choices: ["Add Engineer", "Add Intern", "I'm done adding"]
    },
]


const employee = new Employee();

// employee.

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(response.file, response)
    })
}

init();