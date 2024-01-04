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

  
  

let str = "Tanbits is Software Company";

let new_str = str.split(" ").map((words) =>{

    reverse_words = "";

    for(let i = words.length -1; i >= 0; i--){
        reverse_words += words[i]
    }

return reverse_words;
})

console.log(new_str.join(" "));








 
     
 



     
