class Employee {
    constructor (name) {
        this._name = name;
    }
    dowork() {
        return "complete!";
    }
    getName() {
        return this._name;
    }
}

let scott = new Employee ("Scott Moss");
console.log(scott.getName());