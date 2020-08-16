const Employee = require("./Employee")

class Manager {

    constructor(Employee, officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;