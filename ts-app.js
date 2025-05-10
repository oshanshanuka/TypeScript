// function greet(name: string): string {
//     return `Hello ${name}`;
// }
//
// console.log(greet("Typescript"));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Define/Declare a Variable (Variable Inference)
function testVariableInference() {
    var count = 5;
    var name = "Saman";
}
// 2. Function Return Type Inference
function add(a, b) {
    return a + b;
}
// Array Related Inference
function testArrayInference() {
    var animals = ["Cat", "Dog", "Parrot"];
    var items = [1, "", true];
}
// Optional Parameters in Functions
function greet(name) {
    if (name) {
        return "Hello ".concat(name, "!");
    }
    else {
        return "Hello Guest!";
    }
}
console.log(greet("Saman"));
console.log(greet());
// Default Parameters
function greetDefault(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello ".concat(name);
}
console.log(greetDefault("Saman"));
console.log(greetDefault());
// Enums
function testEnums() {
    // Enum Declaration
    var Direction;
    (function (Direction) {
        Direction["UP"] = "UP";
        Direction["DOWN"] = "DOWN";
        Direction["LEFT"] = "LEFT";
        Direction["RIGHT"] = "RIGHT";
    })(Direction || (Direction = {}));
    var move = Direction.UP;
    console.log(move);
}
testEnums();
// Tuples
function testTuples() {
    var person = ["Saman", 25];
    console.log(person);
    console.log(person[0]);
    console.log(person[1]);
}
testTuples();
// Generics with Functions
function testGenerics(value) {
    return value;
}
var output1 = testGenerics("Hello");
var output2 = testGenerics(12);
console.log(output1);
console.log(output2);
// Generics with Interfaces
function testGenericsWithInterface() {
    var response = {
        data: "User data added!",
        statusCode: 200
    };
    console.log(response);
}
testGenericsWithInterface();
var Human = /** @class */ (function () {
    function Human(noOfLegs, noOfHands) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }
    Human.prototype.getNoOfLegs = function () {
        return this.noOfLegs;
    };
    Human.prototype.setNoOfLegs = function (noOfLegs) {
        this.noOfLegs = noOfLegs;
    };
    Human.prototype.run = function () {
        console.log("Human is Running..");
    };
    return Human;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(noOfLegs, noOfHands, empCode, empName) {
        var _this = _super.call(this, noOfLegs, noOfHands) || this;
        _this.empCode = empCode;
        _this.empName = empName;
        return _this;
    }
    Employee.prototype.getEmpCode = function () {
        return this.empCode;
    };
    Employee.prototype.getEmpName = function () {
        return this.empName;
    };
    Employee.prototype.run = function () {
        console.log("Employee is Running..");
    };
    return Employee;
}(Human));
var employee = new Employee(2, 2, 100, "Saman");
console.log(employee.getEmpCode());
console.log(employee.getEmpName());
console.log(employee.getNoOfLegs());
employee.run();
