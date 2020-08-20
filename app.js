const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// set variable to begin building employee array of objects
let employees = [];

// set global variable for template that will be later be defined using the render() function
let template = "";

// Build out of arrays for manager, team build, engineer, and intern questions to be prompted using inquirer
const questionsManager = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's Email?",
        name: "email",
        validate: function (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase()) === true) {
                return true;
            } else {
                console.log("\n Enter Valid email address.");
                return false;
            };
        }
    },
    {
        type: "input",
        message: "What is your manager's Office Number?",
        name: "officeNumber"
    }
];

const questionsTeam = [
    {
        type: "list",
        message: "Which type of Team Member would you like to add?",
        name: "newEmployee",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members."
        ]
    }
];

const questionsIntern = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        validate: function (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase()) === true) {
                return true;
            } else {
                console.log("\n Enter Valid email address.");
                return false;
            };
        }
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
];

const questionsEngineer = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        validate: function (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase()) === true) {
                return true;
            } else {
                console.log("\n Enter Valid email address.");
                return false;
            };
        }
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github"
    }
];

// Initial function to call prompt for engineer function, build new manager object, and call buildTeam
const startQuestion = () => {
    inquirer.prompt(questionsManager)
        .then(function (res) {
            const mngr = new Manager(res.name, res.id, res.email, res.officeNumber);
            employees.push(mngr);
            buildTeam();
        });
};

// Function to call questions for Engineer and create new engineer object on finish then call buildTeam
const startEngineer = () => {
    inquirer.prompt(questionsEngineer)
        .then(function (res) {
            const eng = new Engineer(res.name, res.id, res.email, res.github);
            employees.push(eng);
            buildTeam();
        });
};

// Function to call questions for Intern and create new intern object on finish then call buildTeam
const startIntern = () => {
    inquirer.prompt(questionsIntern)
        .then(function (res) {
            const int = new Intern(res.name, res.id, res.email, res.school);
            employees.push(int);
            buildTeam();
        });
};

// Function to call prompt with choice of adding engineer, intern, or finish
const buildTeam = () => {
    inquirer.prompt(questionsTeam)
        .then(function (res) {
            if (res.newEmployee == "Engineer") {
                startEngineer();
            } else if (res.newEmployee == "Intern") {
                startIntern();
            } else {
                createHTML()
                    .then(fs.writeFile(outputPath, template, (err) => {
                        if (err) throw err;
                        console.log('Your team.html file has been saved in the Output folder.');
                    })
                    );

            }
        }
        )
};

// Apply async to render function in order to have action happen prior to calling fs.writeFile with the info.  
async function createHTML() {
    template = render(employees);
};

// Function to begin process
startQuestion();

