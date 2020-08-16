// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {

    constructor(Employee, officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    };
};

module.export = Manager;