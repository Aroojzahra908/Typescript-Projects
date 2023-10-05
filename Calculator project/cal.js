// npm init 
// tsc --init 
//tsc
// changes
// package.json >>>> type: module
// tsconfig: >> 14."target": "ES2022",  28. "module": "NodeNext", >> 30. "moduleResolution": "NodeNext", 
// 1.search npm inquirer
// 2.npm i inquirer >> terminal
// 3.npm install --save @types/inquirer >> terminal
//question 1 : Make calculator using input
import inquirer from "inquirer";
let userInput = await inquirer.prompt([{
        type: "input",
        name: "num1",
        message: "Enter your First Number",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter Your Second Number",
    },
    {
        type: "list",
        name: "operations",
        message: "Select the operation you want to perform",
        choices: ["+", "-", "*", "/", "%", "**"],
    }
]);
let result;
switch (userInput.operations) {
    case "+":
        result = userInput.num1 + userInput.num2;
        console.log("The Addition of number 1 & 2 is", result);
        break;
    case "-":
        result = userInput.num1 - userInput.num2;
        console.log("The Subtraction of number 1 & 2 is", result);
        break;
    case "*":
        result = userInput.num1 * userInput.num2;
        console.log("The Multiplication of number 1 and number 2 is", result);
        break;
    case "/":
        result = userInput.num1 / userInput.num2;
        console.log("The Division of number 1 and number 2 is", result);
        break;
    case "%":
        result = userInput.num1 % userInput.num2;
        console.log("The Modulos of number 1 and number 2 is", result);
        break;
    case "**":
        result = userInput.num1 ** userInput.num2;
        console.log("The Exponent of number 1 and number 2 is", result);
        break;
}
