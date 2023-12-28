// if statement 

let A = 20;

let B = 15;

if(A > B ) {
    document.write("X is greater" , "<br>");
};  

// also used other comparison operators in if conditions 

  // logical operators

// && operator
  var age = 23;

  if (age >= 18  && age <= 23){
    console.log("You are eligible");
  }


  const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false


  // || logical or operators

  var marks = 55;

  if (marks >= 78 || marks <= 56){
    console.log("passing marks");
  }


  // logical not operators


  var amount = 500;

  if(!amount >= 100){
    console.log("Return amount ")
  };

  // if else statements 

  var X = 20;

  if (X >= 30){
    document.write("X is greater ")
  }
  else{
    document.write("X is smaller " , "<br>")
  }

  // another example 

  let Name = "Ali";

  let gender = "male"

  if (gender == "male"){
    document.write("Hello Mr." + Name)
  }
  else{
    document.write("Hello Miss." + Name)
  }

/*
  // check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}   */


// if else if



// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");




