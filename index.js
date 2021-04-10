const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const employees = [];

let questions =
    [
        {
            type: 'input',
            name: 'name',
            message: "Team Member's name:",
        },
        {
            type: 'input',
            name: 'ID',
            message: "Employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee Email Address:",
        },
        {
            type: 'list',
            name: 'role',
            message: "Employee Job Title:",
            choices: ["Manager", "Engineer", "Inter"]
        },
    ]

const managerQuestions =
    [
        {
            type: 'input',
            name: 'office',
            message: 'Office Number:'
        }
    ]

const engineerQuestions =
    [
        {
            type: 'input',
            name: 'github',
            message: "Employee's GitHub username:",
        }
    ]

const internQuestions =
    [
        {
            type: 'input',
            name: 'school',
            message: "What school did the Intern attend?",
        }
    ]

const addMore =
    [
        {
            type: 'confirm',
            message: "Add more team members?",
            name: 'confirm',
        }
    ]

async function questionsFuntion() {
    let initalResults = await inquirer.prompt(questions);
    let positionQuestions = await nextPrompt(initalResults);
    let positionResults = await inquirer.prompt(positionQuestions);
    let finalResults = await { ...initalResults, ...positionResults };
    let employee = await makeEmployee(finalResults);
    employees.push(employee);
    let addEmployee = await inquirer.prompt(addMore);
}

function makeEmployee(employee) {
    let name = employee.name;
    let id = employee.id;
    let email = employee.email;
    let role = employee.role;

    switch (role) {
        case 'Manager':
            return new Manager(name, id, email, employee.officeNumber);
            break;
        case 'Engineer':
            return new Engineer(name, id, email, employee.gitHub);
            break;
        case 'Intern':
            return new Intern(name, id, email, employee.school);
            break;
    }
};

function nextPrompt(employee) {
    switch (employee.role) {
        case 'Manager':
            return managerQuestions;
            break;
        case 'Engineer':
            return engineerQuestions;
            break;
        case 'Intern':
            return internQuestions;
            break;
    }
};

//this is not working. if yes, does not start over
function more(confirm) {
    if (confirm = Yes) {
        return questionsFuntion();
    }
}

questionsFuntion();


//need to figure out where to add html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Team Profile</title>
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>

// </body>
// </html>