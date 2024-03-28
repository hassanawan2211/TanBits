// in js file when we overwrite the variable value then  show type  error and retrun the result accordingly

// let cities:string = "Lahore";

// cities = 45;

// cities = true;

// console.log(cities);


// when we not define type of variable in typescript and then we overwite the variable valve in another type then also show an error 

// let cities = "Lahore";

// cities = 45;

// cities = true;

// console.log(cities);


// number example in typescript 

// let age:Number = 24;

// age = 20;

// console.log(age)


// function to add two numbers 

// function sum(a:number,b:number):number{
// return a + b
// }

// console.log(sum(10,4));

// wrong way 

// const sum = (a:number,b:number):number => {
//     return a + b
//     }
    
//     console.log(sum(10,"Hassan"));

// when we use number type in typescript

// let myFavNum:number = 10;
// let myage:number = 20;
// let pi:number = 3.45;
// let negValNum:number = -10;

//error
// let invalidNumber:number= myage + "years";
// console.log(invalidNumber)

//error
// let invalidNumber :number = '123';

//correct
// let computedValue:number = Math.sqrt(16);
// console.log(computedValue)

// let nanValue:number = NaN;


// string type

// var myFullName = "Ali";
// var f_Name = "Ali";
// var l_Name = "Hassan";

// myFullName = f_Name + l_Name;
// console.log(myFullName)


// let message:string = "Hello typescript";

// let firstName:string = "Ali";

// let lastName:string = "Hassan";

// let fullName: string = firstName + lastName;

// console.log(fullName);


// find length of string 

// let sentence:string = "Tanbits is a software company";
// let sentencelength:number = sentence.length;
// console.log(sentencelength);

// string to convert uppercass and lower case 


// let text:string = "Tanbits is a software company";
// let upperCaseText:string = text.toUpperCase();
// let lowerCaseText:string = text.toLowerCase();

// console.log(upperCaseText);
// console.log(lowerCaseText);


// Boolean

// let isMyNameAli:boolean = true;

// let isDone:boolean = true;

// let hasStarted:boolean = false;

// check even number 

// function isEven(a:number):boolean{
// return a % 2 === 0; 
// }

//  console.log(isEven(11));

// Any type 

// let myFavNum:any = 10;

// myFavNum = "hassan"

// myFavNum = true

// console.log(myFavNum);


// unknown type 

// let num1:unknown;

// num1 = "hghg";

// num1 = true;

// // num1 = 5;

// if(typeof num1 === "number"){
//     console.log(num1 + 5);
// }
// else if(typeof num1 === "boolean"){
//     console.log(num1)
// }

// how we define array in typescript

// const elements:number[] = [2,3,4,5,6,7,8,9];
// console.log(elements);

// const elements1:number[] = [2,3,4,5,6,7,8,9,"hassan"];
// console.log(elements1);














