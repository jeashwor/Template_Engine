// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer {
    constructor(Employee, gitHub) {
        this.gitHub = gitHub;
    }

    getGithub() {

    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;