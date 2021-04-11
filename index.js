const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlTemplate = require("./src/html-template")

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
            name: 'id',
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
            choices: ["Manager", "Engineer", "Intern"]
        },
    ]

const managerQuestions =
    [
        {
            type: 'input',
            name: 'officeNumber',
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

async function questionsFunction() {
    let initalResults = await inquirer.prompt(questions);
    let positionQuestions = await nextPrompt(initalResults);
    let positionResults = await inquirer.prompt(positionQuestions);
    let finalResults = await { ...initalResults, ...positionResults };
    let employee = await makeEmployee(finalResults);
    employees.push(employee);
    console.log(employees)
    let addEmployee = await inquirer.prompt(addMore);
    more(addEmployee.confirm);
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
            return new Engineer(name, id, email, employee.github);
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

function more(confirm) {
    if (confirm) {
        return questionsFunction();
    } else {
        generateHTML();
    }
}

function generateHTML() {
    fs.writeFile("./dist/team-profile.html", htmlTemplate(employees), (err) => 
    err ? console.error(err) : console.log('Team Profile successfully created!'))
}

questionsFunction();