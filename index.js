const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let roster = [];
let indexString = "";
const employee = [
                    {id: "name", name: "name",},
                    {id: "employeeID", name: "employee Id",},
                    {id: "emailAddress", name: "email address",},
                ];
const manager = [{id: "officeNumber", name: "office number",},"Manager",];
const engineer = [{id: "githubUsername", name: "github username",},"Engineer",];
const intern = [{id: "schoolName", name: "school name"},"Intern",];

// App entry point
function init() {
    employeeQuestions(manager);
}

// Fills a an array with questions for prompt method
function populatePrompts(ques) {
    let prompts = [];
    let arr = employee.concat(ques);
    for(let i = 0; i < arr.length - 1; i++) {
        let q = {
            type: "input",
            message: `What is the ${arr[arr.length - 1]}'s ${arr[i].name}?`,
            name: arr[i].id, 
        }
        prompts.push(q)
    }
    return prompts;
}

// Invokes inquirer with questions based on employee type
// Takes the response and builds appropiate object
function employeeQuestions(employeeType) {
    let prompts = populatePrompts(employeeType);
    let emp;

    inquirer
        .prompt(prompts)
        .then((response) => {
            switch (employeeType[employeeType.length - 1]) {
                case "Manager": emp = new Manager(response.name,response.employeeID,response.emailAddress,response.officeNumber);
                    break;
                case "Engineer": emp = new Engineer(response.name,response.employeeID,response.emailAddress,response.githubUsername);
                    break;
                case "Intern": emp = new Intern(response.name,response.employeeID,response.emailAddress,response.schoolName);
                    break;
                default:
                    break;
            }
            roster.push(emp);
            pivotQuestion();
        });
}

// Invokes inquirer in between employee questions
// Invokes employeeQuestions() or generateIndex()
// bsed on response
function pivotQuestion() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "would you like to add an additional role?",
                name: "pivot",
                choices: ["Engineer","Intern","Finish building team"],
            }
        ]).then((response) => {
            if(response.pivot === "Engineer") {
                employeeQuestions(engineer);
            }else if(response.pivot === "Intern") {
                employeeQuestions(intern);
            }else {
                indexString = generateIndex(roster);
                buildFile(indexString);
                //REMOVE
                console.log(roster);
            }
        });       
}

function generateIndex(data) {
    let indexfront = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Employee Roster</title>
    </head>
    <body>
        <Main class="row">`
    let indexBack = `</Main>
    </body>
    </html>`

    let returnString = indexfront;

    for(let i = 0; i < data.length; i++) {
        let category = "";
        let gitPossible = "";
        let response = "";

        switch (data[i].constructor.name) {
            case "Manager": {category = "Office Number: ";
                                response = data[i].officeNumber;}
            break;
            case "Engineer": {category = "GitHub: ";
                                gitPossible = `href="https://www.github.com/${data[i].github}"`;
                                response = `https://www.github.com/${data[i].github}`;}
            break;
            case "Intern": {category = "School: ";
                                response = data[i].school;}
            break;
            default:
                break;
        }
        
        let index = `<div class="card text-white bg-primary col-sm-6 col-md-4 col-lg-2 m-3">
        <h5 class="card-header">${data[i].constructor.name}</h5>
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">ID: ${data[i].id}</p>
          <p class="card-text">Email: <a href="mailto:${data[i].email}" class="text-white">${data[i].email}</a></p>
          <p class="card-text">${category}<a ${gitPossible} class="text-white">${response}</a></p>
        </div>
      </div>`
        returnString += index;
    }
    returnString += indexBack;
    return returnString;
}

function buildFile(data) {
    let path = process.argv[2] !== undefined ? `${process.argv[2]}/` : "";
    fs.writeFile(`${path}index.html`,data, (err) =>
    err ? console.error(err) : "");
}

init();