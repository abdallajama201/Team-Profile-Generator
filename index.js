const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let roster = []

const manager = ["name","employee_ID","email_address","office_number"];
const engineer = ["name","employee_ID","email_address","github_username"];
const intern = ["name","employee_ID","email_address","school_name"]

let managerPrompts = [];
let engineerPrompts = [];
let internPrompts = [];

function populatePrompts(ques) {
    let prompts = [];
    for(let i = 0; i < ques.length; i++) {
        let q = {
            type: "input",
            message: `what is your ${ques[i]}?`,
            name: ques[i], 
        }
        prompts.push(q)
    }
    return prompts;
}

managerPrompts = populatePrompts(manager);
engineerPrompts = populatePrompts(engineer);
internPrompts = populatePrompts(intern);

function firstQuestion() {
    inquirer
        .prompt(managerPrompts)
        .then((response) => {
            let m = new Manager(response.name,response.employee_ID,response.email_address,response.office_number);
            roster.push(m);
            pivotQuestion();
        });
}

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
                engineerQues();
            }else if(response.pivot === "Intern") {
                internQues();
            }else {
                console.log(roster);
            }
        });       
}

function engineerQues() {
    inquirer
        .prompt(engineerPrompts)
        .then((response) => {
            let e = new Engineer(response.name,response.employee_ID,response.email_address,response.github_username);
            roster.push(e);
            pivotQuestion();
        });
}

function internQues() {
    inquirer
        .prompt(internPrompts)
        .then((response) => {
            let i = new Intern(response.name,response.employee_ID,response.email_address,response.school_name);
            roster.push(i);
            pivotQuestion();
        })
}

firstQuestion();