// Arrow function in js 

// syntax for simple function 

// function simple (parameterpasshere){
// // code what we want todo when the function run 
// }
// // for calling function
// simple();

// // also use this method 

// let hello = function(){
//     code here
// };

// hello();



// arrow function mostly used in react js 

// syntax is 

// let hello = (num1,num2,num3,num4) =>{
//     return num1 + num2 + num3 + num4;
// }
 
// console.log(hello(15,15,50,20));

// rest operators 
// rest operator used when we have some string value and some num then i want only sum num then function have two parameter first one is variable we do show string and second vaiable define with three dots ... for sum other values 

// function total_value (Name, ...total) {
// console.log(total)

// document.write(`Hello ${Name} :  `)
// let sum = 0;
// for(let i =0; i<total.length; i++){
//     sum +=total[i];
// }
// document.write(sum  , "<br>")
//  return sum;
 
// }

//  console.log( total_value("tanbits",45,45,10));
//  console.log( total_value("tanbit",50,50,100));
 

// spread operator used when we want to copy value of one array and add these valve in another array 

// let array1 = [1,2,3,4];

// let array2 = [5,6,7,8,...array1];

// console.log(array2);

// let array = [...array1,...array2];

// console.log(array);


// another example 

// function total_value (Name, ...total) {
//     console.log(total)
    
//     document.write(`Hello ${Name} :  `)
//     let sum = 0;
//     for(let i =0; i<total.length; i++){
//         sum +=total[i];
//     }
//     document.write(sum  , "<br>")
//      return sum;
     
//     }
    
//     let arr = [4,5,6,7];
//      console.log( total_value("tanbits", ...arr));

// let array  = [1,2,3,4,5];
// console.log(typeof array);
// console.log(array);


// console.log(...array);

// console.log(typeof array);


// let array = [1,2,3,4,5,6];

// console.log(...array)
//  //  when we want to copy an existing array 
// console.log([...array]);



// let array1 = [1,2,3,4,5];

// let array2 = [...array1];
// array1.push(6);
// console.log(array2);
// console.log(array1);


// we can also concat two or more obj 

// let obj1 = {
//     Name : "Ali Hassan",
//     company : "tanbits"
// }

// let obj2 = {
//     age : 20,
//     city : "lahore"
// }

// let obj3 = {...obj1,...obj2};

// console.log(obj3);


// Destructuring Array 

// let user = ["tanbits", "lahore" , "web & app " , ["male", 35000]];

// let [company, city = "isb", service , [gender, salary]] = user;

// console.log(company );
// console.log( city );
// console.log( service);
// console.log(  gender);
// console.log( salary);


// we can also overwrite destructure arr 

// let name_companies = ["tkxel", "tanbits" , "10pearls", "devsinc" ["male", 35000]];

// let [Tkxel, Tsnbits, Pearls, Devsinc, [gender, salary]] = name_companies;


// console.log(salary);

// destructureing of an object 

// let obj1 = {

// }

// let user = ["tanbits", "lahore" , "web & app "  ];

// let [company,  ...argu ] = user;

// console.log(company );
// console.log(argu );


// by using function 

// function user ([Name , age , company]){
// console.log(Name);
// console.log(age);
// console.log( company);
// }

// user(["Ali", 23, "Tanbits"]);

// another method by using function 

// function user ( ){
//     return ["Ali", 23, "Tanbits"];
 
//     }
    
//  let [name , age , company]   = user( );

//  console.log(age);
//  console.log(company);
//  console.log(name);


// Destruturing object 

// let user = {
//     user_name : "Ali Hassan",
//     age : 25,
//     company : "tanbits"
// };

// let {user_name ,age, company} = user;

// console.log(user_name);
// console.log(age);
// console.log(company);


// also do by this method 

// let user = {
//     user_name : "Ali Hassan",
//     age : 25,
//     company : "tanbits"
// };

// let {user_name : n ,age: a, company: c} = user;

// console.log(n);
// console.log();
// console.log(c);


// map method 

// let ary = [1,2,3,4,5];

// let b = ary.map((newAry) => newAry * 5 );
// console.log(b);

// let array = [1,2,3,4,5];

// let new_array = array.map((value) => {
//     return value;
// })


// filter method

// let array = [1,2,3,4,-5,7,6,-5,-6,-7,-8];

// let b = array.filter(positive_number => positive_number > 0);

// console.log(b);


// for each 

// let array = ["Ali", "Hassan", 3, "tanbits"];

//  array.forEach(function(value){
    //   console.log(new_array);
      
// });


// let arr = ["tanbits", 5 , "ali "];

// let arr1  = [ 2,3,"dhijfhs"];

//  var b = arr.concat(arr1);

//  var c = b.join("/");

//  console.log(b);
//  console.log(c);

//  while loop 

// in while loop first we define condtion then statement and then increment or decrement

// program to display numbers from 1 to 5
// initialize the variable
// let i = 1, n = 5;

// // while loop from i = 1 to 5
// while (i <= n) {
//     console.log(i);
//     i += 1;
// };


// do / while loop

// first in do statement is execute then check condition if condtion is true then statement is execute if condition is false then loop terminates

// program to display numbers
// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//      console.log(i);
//      i++;
// } while(i <= n);


// another example 

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

// let sum = 0;
// let number = 0;

// do {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// } while(number >= 0)

// console.log(`The sum is ${sum}.`);
 

// switch case 


// let day = 4;

// switch(day){
// case 0:
// console.log("Today is monday")
// break;
// case 1:
//     console.log("Today is tuesday")
// break;
// case 2:
//     console.log("Today is wednesday")
// break;
// case 3:
//     console.log("Today is thurday")
// break;
// case 4:
//     console.log("Today is friday")
// break;
// case 5:
//     console.log("Today is saturday")
// break;
// case 6:
//     console.log("Today is sunday")
// break;

// default:
//     console.log("Enter valid day")
// };



// another example 

// let day = 3;

// switch(day){
// case 0: case 1: case 2:  case 3: 
// console.log("Today is monday")
// break;
// // case 1:
// //     console.log("Today is tuesday")
// // break;
// // case 2:
// //     console.log("Today is wednesday")
// // break;
// // case 3:
// //     console.log("Today is thurday")
// // break;
// case 4:
//     console.log("Today is friday")
// break;
// case 5:
//     console.log("Today is saturday")
// break;
// case 6:
//     console.log("Today is sunday")
// break;

// default:
//     console.log("Enter valid day")
// };


// another example 

// let age = 30;

// switch(true){
// case(age >= 18 && age <= 20):
//     console.log("You are eligibal");
//     break;
// case (age >= 21 && age <= 30):
// console.log("you are not eligibal");
// break;

// default:
//     console.log("Enter valid age ");
//     break;
     
// };


// for loop 

// let   n = 5;

// for  (let a = 3; a <= n; a++){
//     console.log(a);
// }


// map method

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let new_arr = arr.map((item)=>{
//   return item * 2;
// })
// console.log(new_arr);


// filter method

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let new_arr = arr.filter((item)=>{
//   return item % 2 === 0;
// })
// console.log(new_arr);


// reduce method 
// reduce method convert all element of an array in single varaible like total sum of the array 
// reduce method have two parameter first 0ne is previous value and in second parameter have current value 

// let arr = [2,3,4,5,6,7,8];

// let new_arr = arr.reduce((prev,curr) =>{
//     return prev + curr;
// });

// console.log(new_arr);

//   Shallow Copy

// A shallow copy is a copy that only goes one level deep. In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object. It means that if you make changes to the nested object, it will also affect the original object, as well as the copied object

// let user = {
//     Name: "Ali",
//     age : 23,
//     company : "Tanbits"
// }
// console.log(user);
// // by using ...  destructure of an object then only change in new object no any change in previous object 
// let user1 = {...user};

// user1.age = 35;

// console.log(user1);
// console.log(user);


// Deep copy 

// when we have an object and also nested obj in this object and we assign this obj1 into another variable obj2 then we want change value of the nested obj only obj2 and want not change in main obj then we use deep copy concept

// In this deep copy we convert obj1 to string then convert into object 

// json.stringify used for convert object into string 

// json.parse used for convert back to obj from string 

// let obj1 = {
//     Name : "Ali",
//     age : 23,
//     company : "Tanbits",
//     services : {
//         web : "react",
//         backend : "node"
//     },
// };
// console.log(obj1);
// let obj2 =JSON.parse( JSON.stringify(obj1));

// obj2.services.web = "vue js ";

// console.log(obj2);


// Date  method
// we can also find previous years date day etc by using these method 

// new Date() use for show current day date 
 // This show date according to system or server



// let now = new Date();

// // todaatestring used for SHOW on date in string like mon feb 11 2019

// // console.log(now.toDateString());

// //get only current simple date 

// console.log(now.getDate());

// // for get only full year 

// console.log(now.getFullYear());

// // for only get month 

// // start 0 from first month 


// console.log(now.getMonth());

// // for get current day 
// // this senario sunday is start from 0

// console.log(now.getDay());

// //  timing 

// // for geting houser

// console.log(now.getHours());

// // for minutes

// console.log(now.getMinutes());

// // for seconds 

// console.log(now.getSeconds());

// // for milliseconds

// console.log(now.getMilliseconds());

// //date method for set 

// // for checking furture what day and time on given date 

// now.setDate(3);

// console.log(now)

// // for year 

// now.setFullYear(2025);

// console.log(now)

// also set for months and for timming hourse , second , minutes and millisecond 



//  method for declare object 

// let person = new Object();
// person.Name = "Ali";
// person.age = 23;
// person.city = "Lahore";
// person.job_title = "MERN_Intern";
// person.company = "Tanbits";

// console.log(person.age);

// // another method 

// let person2 = {
// Name : "Ali",
// age:  23,
// city:  "Lahore",
// job_title : "MERN_Intern",
// company : "Tanbits",
// }

// console.log(person2.city);

// fundaments of javascript 

// reverse of an array 

// let arr = [1,2,3,4,5,5,6];

// let start = 0;
// let end = arr.length-1;

// while(start < end){
//    let temp = arr[start];
//    arr[start] = arr[end];
//    arr[end] = temp

//   start++;
//   end--;
    
// }
// console.log(arr);
// find max num from an array 

// let array = [5,6,3,4,56];

// let max = array[0];

// for (let i = 0; i<array.length; i++){
//     if( array[i] > max){
//         max = array[i]
         
//     }
    
// }

// console.log(max);

// find minimum num of an array 

// let number = [3,4,5,6,1,7,8,9];

// let min = number[0];

// for(let i = 0; i<number.length; i++){ 
//     if(number[i] < min){
//         min = number[i]
//     }
// }
// console.log(min);

// check palindrom

// let str = "mam"

// let  left = 0;
// let  right = str.length-1;
// let check = true;
// while(left < right) {
//     if(str[left] !== str[right]){
//         check = false;
//         console.log(false);

//         break;
//     }
//     left++;
//     right--;
//     break;

// }

// if(check === true){
//     console.log(check);
// }

//  sorting of an array 

// let arr = [1,4,7,9,3,4,2,5,6];

// for(let i = 0; i < arr.length; i++){
//     for(let j=0; j < arr.length -1 -i;j++ ){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j+1] = temp;
//         }
//     }
// }

//  console.log(arr);

// for dublication numbers 

// let arr = [2,3,6,2,3,8,9,7,6,5,6,2];

// let dubicate_num = arr.filter((num,index,array) => array.indexOf(num) !== index)
// console.log( dubicate_num);

// sum of an array and average 

// let arr = [2,2,5,1];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);
// console.log(sum/arr.length);

//  reduce method 

// let arr = [5,5,5,5];
// let new_arr = arr.reduce((prev,curr) => prev + curr);

// console.log(new_arr);
// console.log(new_arr/arr.length);

//

// let array = [2,4,5,7,8,7];
// let arr = new Array;
// for(let i = 0; i < array.length; i++){
//     switch(true){
// case (array [i]%2 == 0 ):
//     console.log("This is Even Nunber" + )
//     break;
//     case (array[i] % 2 !== 0):
//         console.log("This is odd num" + array[i])
//         break
//         default:
//             console.log("this is equal")

//     }
// }

// let array = [2, 4, 5, 7, 8, 7];
// let EvenArr = [];
// let OddArr=[];
// for (let i = 0; i < array.length; i++) {
//     switch (true) {
//         case array[i] % 2 === 0:
//             EvenArr.push(array[i]); // Add even numbers to the new array
//             break;
//         case array[i] % 2 !== 0:
//             OddArr.push(array[i]);// Add Odd numbers to the new array
//             break;
//         default:
//             console.log("this is equal");
//     }
// }
// console.log("New Array with Even Numbers: " + EvenArr);
// console.log("New Array with Even Numbers: " + OddArr);


// split method 
// split method return an array 
// split method take all element of the string 

// let str = "alihassan hassan";
// let new_str = str.split(" ");
// console.log(new_str);


 // reverse of an string 

//  let str = "tanbits is software company";
 
//  let new_str = str.split(" ").map((words) =>{
//      for(let i = str ; i >=0; i--){
//         words += str[i]
//      }
//     // return words.split(" ")

//     console.log(words);
     
//  })
// console.log(str.)


// let str = "tanbits is software company";
 
//  let new_str = str.split(" ").map((words) =>{
//      for(let i = str ; i >=0; i--){
//         words += str[i]
//      }
//     // return words.split(" ")

//     console.log(words);
     
//  })
// console.log(str.s)
// console.log(new_str.join(" "));  

// let str = "tanbits is software company";
// let new_str = str.split(" ").map((word) => {
//     let reversed_word = "";
//     for(let i = word.length - 1; i >= 0; i--){
//         reversed_word += word[i];
//     }
//     return reversed_word;
// });
// console.log(new_str.join(" "));

  
  // reverse only words from given string 

// let str = "Tanbits is Software Company";

// let new_str = str.split(" ").map((words) =>{

//     reverse_words = "";

//     for(let i = words.length -1; i >= 0; i--){ 
//         reverse_words += words[i]
//     }

// return reverse_words;
// })

// console.log(new_str.join(" "));

// // find largest word from given string 

// let str = "tanbits is a software company";

// let words = str.split(" ");

// let longestWord = "";

// for(let word of words ){
//     if(word.length > longestWord.length)
//     longestWord = word
    
// }
// console.log(longestWord);

// push an element into the exsisting array 

// let array = [1,2,3];

// let newElement = 5 ;
// let new_string = "hassan" ;
// const multipleElements = [4,5,6] 

// let new_arry = [];

// for(let i = 0; i < array.length; i++){
//     new_arry[i] = array[i];
   
// }

// // new_arry[array.length] = newElement;
// // new_array length 3
// // array length 3

// new_arry[array.length] = newElement;

// console.log(array);

// console.log(new_arry);

// delete an element from exsisting array 

//  let arr = [1,2,3];

//  let new_arr = [];

//  for(let i = 0; i < arr.length -1; i++){
//     new_arr[i] = arr[i];
//  }

//  console.log(arr);
//  console.log(new_arr)


// let arr = [2,3,4,5];

// let new_element = 1;
 

// arr[arr.length] = new_element

// console.log(arr);


// add multiple element in an array 

// let arr = [1,2,3];

// let add_element = [5,6,7,9];

// let new_arr = [];

// let newIndex = 0;

// for(let i =0; i < arr.length + add_element.length;   i++){

// if(i < arr.length){
//     // arr[i] = add_element[i]
//     new_arr[i] = arr[i];
// } else{
//     new_arr[i] = add_element[newIndex];
//     newIndex++;
// }

// } 
   
// console.log(new_arr);

// add new element at the first index of the array 

// let arr = [1,2,3,4,5,6];

// let new_element = 8;

//  let new_arr = [new_element];

//  for(let i = 0; i < arr.length ; i++){
//     new_arr[i + 1] = arr[i]
//  }

//  console.log(new_arr);

// remove an element from first index of an array

// let arr = [7,2,3,4,5];

// for(let i = 0; i < arr.length -1; i++){
// arr[i] = arr [i + 1];
// }
// arr.length = arr.length -1;
// console.log(arr);

// find repeated elements of array 

// let arr = [2,3,4,2,5,6,3,2,5,7,8,7]; 

// let new_arr = [];

// for of   == The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// let str = "hassan";

// for(let name of str){
//     console.log(name);
// }


// The JavaScript for-in loop is used to cycle through an object's properties. If we want to display the contents of an object during debugging, it can be a fantastic tool.
// let str = "hassan";

// for(let name in str){
//   console.log(name);
// }


//  find all repeated element in the an array 

// let arr = [3,5,6,7,3,5,6,7,9,9,33,11,2,22,2,22];

//  let repeated_arr = [];

//  for(let i = 0; i < arr.length; i++){
//    if(arr.indexOf(arr[i]) !== i && !repeated_arr.includes(arr[i])){
//     repeated_arr.push(arr[i])
//    }
//  }

// console.log(repeated_arr);


// another example 

// const numbers = [2, 3, 5, 2, 5, 6, 7,2];
// const repeatedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let isRepeated = false;
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j]) {
//       isRepeated = true;
//       break;
//     }
//   }
//   if (isRepeated && !repeatedNumbers.includes(numbers[i])) {
//     repeatedNumbers.push(numbers[i]);
//   }
// }
// console.log(repeatedNumbers);


// sub array 

// const arr = [4,3,5,6];

// let max_sum = arr[0];

// let current_sum = arr[0];

// for(let i = 0; i < arr.length; i++){
//   current_sum = Math.max(arr[i],
//     current_sum + arr[i]);
//     max_sum = Math.max(max_sum,
//       current_sum );
// }


// console.log(max_sum);  



//   In an array and we target any two index and return only sum of the target index 

// const array = [3, 5, 2, 8, 4];
// const target = 1;
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === target) {
//       sum = array[i] + array[j];
//       break;
//     }
//   }
//   if (sum !== 0) {
//     break;
//   }
// }

// console.log(sum);

// callback function 

// function full_function (arr,sumNumbers){

//   arr.push(10);

   
// sumNumbers(10,20);
 

// }

// sumNumbers((num1,num2) =>{
//   return num1 +num2;
// }) 

// arr = [1,2,3,4,5,6];
//  console.log(full_function(arr,sumNumbers));


// function  total_num(num1 , num2){
//   return num1 + num2;
// }

//console.log(total_num(25,25));

// cut the array length 

//  let arr = [1,2,4,6,8];

// arr.length = [1];

// console.log(arr);  

// how we empty an array

// let arr = [1,2,3,4,5];

// arr.length  = [];

// console.log(arr)


  
// how would we check an integer

// function checkInterger(num){
// if(num%1 === 0){
//   console.log("This is an integer number")
// } else{
//   console.log("This is not an integer number ")
// }
// }
// checkInterger( "string");



 
// function isPalindrome (str){


//   str = str.toLowerCase();
  
//   str = str .replace(/\W/g, "");
  
//   let start =0;
//   let end = str.length -1;
  
//   let check = true;
  
//   while(start < end){
//       if(str[start] !== str[end]){
//           check = false;
           
  
//           if(check === true){
//             console.log(check);
//         }  
  
//           break;
//       }
//       start++;
//       end--;
//       break;
//   }

//   return check;
  
//   } 

// // let check = true;
  
//    let str =  "race a car";

   
  
//   console.log(isPalindrome(str));
   
  
// function isPalindrome(str) {
//   str = str.toLowerCase();
//   str = str.replace(/\W/g, "");
//   let start = 0;
//   let end = str.length - 1;
//   let check = true;
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       check = false;
//       break;
//     }
//     start++;
//     end--;
//   }
//   return check;
// }

// let str = "racecar";
// console.log(isPalindrome(str)); // expected output: false

// modules 

// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain a code-base.

// Modules are imported from external files with the import statement.

// Modules also rely on type="module" in the <script> tag.


// example 

// {/* <script type="module">
// import message from "./message.js";
// </script> */}

// Export
//Modules with functions or variables can be stored in any external file.

//There are two types of exports: Named Exports and Default Exports.

//Named Exports
//Let us create a file named person.js, and fill it with the things we want to export.

//You can create named exports two ways. In-line individually, or all at once at the bottom.

//In-line individually:
//person.js

//export const name = "Jesse";
//export const age = 40;
//All at once at the bottom:
//person.js

//const name = "Jesse";
//const age = 40;

//export {name, age};

//Default Exports
//Let us create another file, named message.js, and use it for demonstrating default export.

//You can only have one default export in a file.

//Example
//message.js

//const message = () => {
//const name = "Jesse";
//const age = 40;
//return name + ' is ' + age + 'years old.';
//};

//export default message;
//Import
//You can import modules into a file in two ways, based on if they are named exports or default exports.

//Named exports are constructed using curly braces. Default exports are not.

//Import from named exports
//Import named exports from the file person.js:

//import { name, age } from "./person.js";

//Import from default exports
//Import a default export from the file message.js:

//import message from "./message.js";

//Note
//Modules only work with the HTTP(s) protocol.

//A web-page opened via the file:// protocol cannot use import / export.


// promise

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

//A promise may have one of three states.

//Pending
//Fulfilled
//Rejected
//A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

//For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.


// JavaScript Promise Methods
//There are various methods available to the Promise object.

// Method	Description
// all(iterable)	Waits for all promises to be resolved or any one to be rejected
//  allSettled(iterable)	Waits until all promises are either resolved or rejected
// any(iterable)	Returns the promise value as soon as any one of the promises is fulfilled
// race(iterable)	Wait until any of the promises is resolved or rejected
// reject(reason)	Returns a new Promise object that is rejected for the given reason
// resolve(value)	Returns a new Promise object that is resolved with the given value
// catch()	Appends the rejection handler callback
// then()	Appends the resolved handler callback
// finally()	Appends a handler to the promise


// example 

// let check = false;

// let prom = new Promise (function(resolve,reject){
//   if(check){
// resolve("i am successful.")
//   } else{
//     reject("i am failed.")
//   }
// });

// console.log(prom);

// another method 

// function prom(check){
//   return new Promise (function(resolve,reject){

//     console.log("fetching data, please wait")

//     setTimeout(() =>{
//       if(check){
//         resolve("tanbits is software company")
//       } else{
//         reject("tanbits is good company ")
//       }
//     },3000)


 
//   });

// }

// let onfulfilament = (Result) => {
//   console.log(Result);
// }
// let onRejection = (error) => {
//   console.log(error);
// }

// prom(false).then(onfulfilament).catch(onRejection);
  
// console.log(prom(true))


// also do more simple in code 

// function prom(check){
//   return new Promise (function(resolve,reject){

//     console.log("fetching data, please wait")

//     setTimeout(() =>{
//       if(check){
//         resolve("tanbits is software company")
//       } else{
//         reject("tanbits is good company ")
//       }
//     },3000)


 
//   });

// }

 

// prom(true).then((Result) => {
//   console.log(Result);}).catch((error) => {
//     console.log(error);});


 //    another example division show msg division is done for fulfilled case 


//  function prom(num1,num2){
//   return new Promise (function(resolve,reject){

//     console.log("fetching data, please wait")
//    var c = num1 / num2;
//     setTimeout(() =>{
//       if(num1,num2){
//         resolve(`your answer is : ${c}`)
//       } else{
//         reject(" calculation failed ")
//       }
//     },2000)


 
//   });

// }

 

// prom(10,3).then((Result) => {
//   console.log(Result);}).catch((error) => {
//     console.log(error);});
  

// example for rejection case 

// function prom(num1,num2){
//   return new Promise (function(resolve,reject){

//     console.log("fetching data, please wait")
//    var c = num1 / num2;
//     setTimeout(() =>{
//       if(num1,num2){
//         resolve(`your answer is : ${c}`)
//       } else{
//         reject(" calculation failed ")
//       }
//     },2000)


 
//   });

// }

 

// prom(10,0).then((Result) => {
//   console.log(Result);}).catch((error) => {
//     console.log(error);});



// promise all method 

// The Promise.all() method is actually a method of the Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises. In a simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that has already been rejected, whether or not the other promises have been resolved. 

// Syntax: 

// Promise.all( iterable )
// Parameters: This method accepts a single parameter iterable which takes an array of promises or a normal array that contains some objects.

// Return values: It follows some rules to return a single promise: 

// If passed argument is empty, it returns a Promise that is already resolved.
// If the passed iterable contains no promises, it returns a Promise that is resolved asynchronously.
// For all other cases, it returns a pending Promise.
// Fulfillment and Rejection of Promise.all() Method: 

// Fulfillment: The returned promise is fulfilled, 

// If the passed iterable is empty, then this method returns a promise synchronously which is already resolved.
// If all of the passed promises are fulfilled, the returned Promises are fulfilled asynchronously.
// Here the successful execution of this particular method totally depends on all promises to get successfully executed.
// Rejection: If any of the passed promises are rejected, then this method rejects the value of that promise, whether or not the other promises have been resolved. In other words, if any promise fails to get executed, then Promise.all() method will return an error and it will not take into account whether other promises are successfully fulfilled or not.

// In promise all method then() function call only when all promise resolve and when failed to resolve any one promise  then call catc() function. 

// Example promise .all () method 

// in this case all promise are resolve then called then() function run and execute 

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("first promise is resolved ")
//     resolve(10);
//   } , 1* 1000)
  
// });
// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("second promise is resolved ")
//     resolve(20);
//   } , 2* 1000)
  
// });
// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("thired promise is resolved ")
//     resolve(30);
//   } , 3* 1000)
  
// });

// let total = 0;
// Promise.all([p1,p2,p3]).then((Result)=>{

//   for(let i in Result){
//     total += Result[i];
//   }
// console.log(`Result  is : ${Result}`)
// console.log(`Sum of the total Result is : ${total}`)
// }).catch((Error)=>{
//   console.log(`Error : ${Error}`)
// });


// in any one recjection case excecute only catch function in promise.

// Example 


// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("first promise is resolve ")
//     resolve(10);
//   },1 * 1000)
// });


// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
// console.log("second promise  is reject  ")
// reject("failed")
//   },2 * 1000)
// });

// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log(" thired promise is resolve ")
//     resolve(30);
//   }, 3 * 1000)
// })
// let total = 0;
// Promise.all([p1,p2,p3]).then((result)=>{

//   for(let i in result){
//     total += result[i];
//   }
// console.log(`Result is ${result}`)
// console.log(`total num is : ${total}`)

// }).catch((error)=>{
// console.log(`Error is : ${error}`)
// });


// also do short this code 

// let promiseCall = function (returnData,messege){
//   return (resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(`the ${messege} promise has resolved `)
//       resolve(returnData);

//     }, returnData * 100)
//   }
// }

// let p1 = new Promise(promiseCall(10,"first"));
// let p2 = new Promise(promiseCall(20,"second"));
// let p3 = new Promise(promiseCall(30,"thired" ));

// let total = 0;
// Promise.all([p1,p2,p3]).then((result)=>{
//   for(let i in result){
//     total += result[i];
//   }
// console.log(`Result is : ${result}`)
// console.log(`total result is : ${total}`)
// }).catch((error)=>{
//   console.log(`Error : ${error}`)
// })


// rejection case 


// let promiseCall = function (returnData,messege){
//   return (resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(`the ${messege} promise has resolved `)
//       resolve(returnData);

//     }, returnData * 100)
//   }
// }

// let p1 = new Promise(promiseCall(10,"first"));
// let p2 = new Promise(promiseCall(20,"second"));
// let p3 = new Promise(promiseCall(30,"thired" ));
// let p4 = new Promise((resolve,reject) =>{
//   console.log(`the fourth function is rejected `)

//   reject("failed ")
// })

// let total = 0;
// Promise.all([p1,p2,p3,p4]).then((result)=>{
//   for(let i in result){
//     total += result[i];
//   }
// console.log(`Result is : ${result}`)
// }).catch((error)=>{
//   console.log(`Error : ${error}`)
// })



// AjAx is technique used for creating dynamic and fast web pages 

//AJAX A for Asynchronous , j for javascript , And xml 

// xml is data formet 

// in single page website i have many links and each link have own content and when i click on any link i not want to reload whole page only want to change only content on that page only 

// when viewer send request to server and server responce to viewer and provide data that viwer send request when server send data the page refresh and show particular content or file 

// in ajax case request is not go to the server directly 

// we use javascript class xmlHttprequest used go send request background then get data from server and then give responce 

// first go to the background and then get data related to particlar request and then responce the data and in this 
// don't reload the whole page reload only the content page 

// the content is three type here who get in responce from server 

//text file 

// xml data
// Extensible Markup Language (XML) is a markup language that provides rules to define any data. Unlike other programming languages, XML cannot perform computing operations by itself. Instead, any programming language or software can be implemented for structured data management.

// json data 
// JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page. JSON is "self-describing" and easy to understand.

// when we do request to server with xmlhttprequest then these work divided in 5 steps 

// these steps name is ready state 

//0: request not initialize / neutral mood/ no send request to server  

// 1: server connection established  / in this step built connection between local system and server 
 
// 2: request received

// 3: processing request 

// 4: request finish and reponce is ready 

// ready state 2 / means request received to server 

// ready state 4 / means server send responce 

// when server send responce in this case having two things 

// status 

// responceText  / when we have request do for text then reveive responceText 

// in status have three type code 

 // 200 = "ok" / means responce is related to request 

 // 403 = "forbidden" / means server is not responding / having any issue 

 // 404: = "not found " / means not file available in server that we request to the server 

 
 






 
     
 



     
