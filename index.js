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

async function questionsFuntion() {
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
        return questionsFuntion();
    } else {
        generateHTML();
    }
}

let employeeCard = function createCard (employees) {
    if (role == "Manager") {
        return`<div class="card employee">
        <div class="employee-header">
          <h2>${employees.name}</h2>
          <h3>${employees.role}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employees.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employees.email}">${employees.email}</a>
            </li>
            <li class="list-group-item">Office Number: ${employees.officeNumber}</li>
          </ul>
        </div>  
        </div>`
    }
    else if (role == "Engineer") {
        return`<div class="card employee">
        <div class="employee-header">
          <h2>${name}</h2>
          <h3>${role}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">GitHub Profile: ${github}</li>
          </ul>
        </div>  
        </div>`
    }
    else if (role == "Intern") {
        return`<div class="card employee">
        <div class="employee-header">
          <h2>${name}</h2>
          <h3>${role}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>  
        </div>`
    }

}

function generateHTML() {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="containter-fluid">
      <div class ="row">
        <div class="col-12 jumbotron mb-3 heading">
            <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="card-container col-12 d-flex justify content-center">
        ${employeeCard}
        </div>
      </div>
    </div>
    </body>
    </html>`
    

    fs.writeFile("./dist/team-profile.html", html, (err) =>
        err ? console.error(err) : console.log('Team Profile successfully created!'))
}

questionsFuntion();