// // Array methods 

// let array = ["Ali", 12, "Tanbits"];

// // for deletion 

// delete array[2];

// // for update 

// array[1] = 15;



// console.log(array);


// // multidimension array 

// let Array = [
//     ["Ali",23,"tanbits", "lahore"],
//     ["ahmad",22,"tanbits", "lahore"],
//     ["humair",21,"tanbits", "lahore"],
//     ["dr",20,"tanbits", "lahore"]
// ];

// for(let a = 0; a < Array.length; a++){
//     for(let b=0; b < Array.length; b++){
//         document.write(Array[a][b] + "" );
//     }
//     document.write("<br>" );
// }; 


// //for sort 
// // used for sorting ascending decending etc


// let clg_Name = ["punjab clg" , "superior clg", "aspire clg", "lead clg"];

// console.log(clg_Name);

// clg_Name.sort();
 
// console.log(clg_Name);

// // for reverse order 

// clg_Name.reverse();

// console.log(clg_Name);


// // push and pop

// // pop method used for delete last entry of an aray

// let a = ["punjab clg" , "superior clg", "aspire clg", "lead clg"];

// console.log(a);

// a.pop();

// console.log(a);


// // push method is used for add any entry at last index of an array 

// a.push("numal clg");
 
// console.log(a);


// // shift method is used for add delete  entry of an first entry of array

// a.shift();
// console.log(a);

// // unshift method is used for add any entry at first index of an array 

// a.unshift("KIPS clg");

// console.log(a);


// // concat method is used for combine two different array or like concat two string 

// let compines = ["tanbits", "tkxel", "netsole", "10pearls"];

// console.log(compines);

// let b = compines.concat("pf", "i2c");

// console.log(b);


// // another example 
 
// let emp_Names = ["ali", "ahmad", "ahsan"];
// let B = ["malik", "talha"];
// // concat another ARRAY
// // let C = ["kubra", "dr"]
// // 
// let c = emp_Names.concat(B);

// console.log(c);


// // join method is used to convert different types of valve in an array into in single valve 

// var d = c.join("/");
// console.log(d);

// // slice method is used for geting value from an array and retrun value in an array 


// let y = ["ali", "ahmad", "ahsan", "nadeem", "waseem"];

// console.log(y);

// let z = y.slice(1,4);

// console.log(z);

// // splice method is used for add any two entry at the middle of the array 
// // splice method accept 3 parameter index, howmany, new value 
// // also used for delete entries
// // chnging in exsisting array

// let u = ["ali", "ahmad", "ahsan", "nadeem", "waseem"];

// console.log(u);

// u.splice(3,0,"najam", "bilal");

// console.log(u);


// // isarray method is used for checking vaiable is array or not 

//  let x = ["ali", "ahmad", "ahsan", "nadeem", "waseem"];
//   let n = "hasan"
//  console.log(n);

// let s = Array.isArray(n);

// console.log(s);

// // indexof used for checking value is exsist in the array 

// // when we search of an that value not in array then indexof function is return -1 index 


let a = ["Ali", "Ahmad", "hassan", "j"]

console.log(a);

let c = a.indexOf("Ali",2);

console.log(c);

// // last indexof start searching from end side of an array also give and also give index in parameter for where we want to start 


// // includes method used for searching etc value are exsist yes or not in an array and return true or false 
// // case

// let city = ["lahore", "isb", "multan", "bwp"];

// console.log(city);

// let C = city.includes("hore");

// console.log(C);

// // for loop 

// for(let i = 0; i < 6; i++){
//     console.log(i);
// }

// var i=0;
// while(i<=6){
//     console.log(i);
//     i++;
// }
// do{console.log(i)
// i++}while(i<10)


// function calculateNum(num1, num2, operator){

//     if(operator === "+" ){
//         return num1 + num2;
        
//     }
//     else if(operator === "-"){
//         return num1 -num2;
//     }

// }


 
//   console.log(calculateNum("12" , "22" , "-"));

// spreat operators 
// rest operator
// 
