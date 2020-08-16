// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee")

class Intern {
    constructor(Employee, school) {
        this.school = school;
    };

    getSchool() {

    };

    getRole() {
        return "Intern";
    };
};

module.export = Intern;