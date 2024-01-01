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

let user = {
    user_name : "Ali Hassan",
    age : 25,
    company : "tanbits"
};

let {user_name : n ,age: a, company: c} = user;

console.log(n);
console.log();
console.log(c);
     
 



     
