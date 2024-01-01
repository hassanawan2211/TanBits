// by using var 
 // same name variable reassign value also
 // var is function scope 

// var a = "Ali";

// var a = "Hassan";

// console.log(a);

// let A = 25;
// if(a){
 
// var b = 13;
// console.log(b);
// }
//  console.log(b);


 // by using let 
 // let is block scope 

//  let f_name = "Ali";

 // same name vaviable not declare again 

 // we can only overwrite the variable value 

//  let f_name = "hassan "

// f_name = "Hassan"

// console.log(f_name);



// if we declare let variable in any code of block like function or {} bracket then we can access only inside of block 

// if(a){
//     let c = 23;

// }

// console.log(c);



// by using const 

// we can only define one time variable value , dont assign again and dont declare same time variable 

// const b = 4;

// b = 34;

// const b = 34;

// console.log(b);

// also blocked scope 


// let a = 34;
// if(a){
//     let b = "Ali "
//     console.log(b);
// }

// console.log(b);


// template string used for concat two or more string value 

// let user = "ali";

// let user2 = `ahmad${user}`;

// console.log(user2);


// let student = "Ali";

// let marks = 990;

// let total = 1100;

// let S]student_data = 

// console.log(`Hello ${student} your marks is ${marks}  out of ${1100}`)


// also do this method 

// let student = "Ali";

// let marks = 990;

// let total = 1100;

//  // also use "" ' 
// let student_data = `Hello "${student}" your marks is '${marks} ' out of ${1100}`

// console.log(student_data);


// by using function 

let f_name = "Ali";

let l_name = "Hassan"

function  fullName (f_name,l_name){
return `${f_name} ${l_name}`
}

let hello = `Hello ${fullName(f_name,l_name)}`;

console.log(hello);



 

