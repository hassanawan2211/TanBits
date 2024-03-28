import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first no"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second no"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%"],
        message: "select operator:"
    },
]);
// console.log(answer)
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    else if (operator === "%") {
        result = numberOne % numberTwo;
    }
    console.log(result);
}
else {
    console.log("Plz Enter valid input ");
}
