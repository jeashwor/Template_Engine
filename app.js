const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const renderAsync = util.promisify(render);


let employees = [];
let template = "";

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
        name: "email"
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
        name: "email"
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
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github"
    }
];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const startQuestion = () => {
    inquirer.prompt(questionsManager)
        .then(function (res) {
            const mngr = new Manager(res.name, res.id, res.email, res.officeNumber);
            employees.push(mngr);
            console.log(employees);
            buildTeam();
        });
};

const startEngineer = () => {
    inquirer.prompt(questionsEngineer)
        .then(function (res) {
            const eng = new Engineer(res.name, res.id, res.email, res.github);
            employees.push(eng);
            console.log(employees);
            buildTeam();
        });
};

const startIntern = () => {
    inquirer.prompt(questionsIntern)
        .then(function (res) {
            const int = new Intern(res.name, res.id, res.email, res.school);
            employees.push(int);
            console.log(employees);
            buildTeam();
        });
};

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
}




async function createHTML() {
    template = render(employees);
};

// fs.writeFile(outputPath, template, (err) => {
//     if (err) throw err;
//     console.log('Your team.html file has been saved in the Output folder.');
// })

startQuestion();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
