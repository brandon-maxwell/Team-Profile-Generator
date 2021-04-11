function startHTML(employees) {
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
        <div class="card-container col-12 d-flex justify content-center">`;

    for (var i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === "Manager") {
            html += createManager(employees[i])
        } else if (employees[i].getRole() === "Engineer") {
            html += createEngineer(employees[i])
        } else if (employees[i].getRole() === "Intern") {
            html += createIntern(employees[i])
        }
        html += endHTML();
        return html
    }
}
function createManager(manager) {
    return `<div class="card employee">
        <div class="employee-header">
          <h2>${manager.getName()}</h2>
          <h3>${manager.getRole()}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>  
        </div>`
}

function createEngineer(engineer) {
    return `<div class="card employee">
        <div class="employee-header">
          <h2>${engineer.getName()}</h2>
          <h3>${engineer.getRole()}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </li>
            <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
          </ul>
        </div>  
        </div>`
}

function createIntern(intern) {
    return `<div class="card employee">
        <div class="employee-header">
          <h2>${intern.getName()}</h2>
          <h3>${intern.getRole()}</h3>
        </div>
        <div class="employee-info">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
          </ul>
        </div>  
        </div>`
}

function endHTML() {
    return `</div >
    </div >
  </div >
  </body >
  </html >`
}

module.exports = startHTML;