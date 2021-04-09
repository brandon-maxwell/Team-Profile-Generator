const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// const employees = [];

let questions =
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

// inquirer.prompt(questions).then((response) => {
//     console.log(response)
//     inquirer

//     // inquirer.prompt(engineerQuestions).then((response) {

//     // }
// })

function nextPrompt(answer) {
    switch (answer) {
        case 'Add Engineer': return engineerQuestions; 
        case value:
            
            break;
    
        default:
            break;
    }
}


async function questionsFuntion(){
    let response = await inquirer.prompt(questions)
 
  let roleQuestions =  nextPrompt(response.add)
   
    let response2 = await inquirer.prompt(roleQuestions);
    
    
}

questionsFuntion(); 


// Reviewed w/Tutor - may make more sense to have 1 main set of quetions, 
// then add the subset of selected employee time
// will then want to push results to array and loop through quesiton again


// employee.

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