// data types 

// string 

let myName = "Ali Hasan"

const last_name = "Hassan"

document.write( last_name , "<br>");




// number 


// Without decimals:
let marks = 980;

let toatal_marks = 1100;


// With decimals:
const weight = 67.7;

document.write(weight );

// for checking type of variable 
document.write(typeof weight);



// undefine 

let a; 
document.write(a , "<br>");
document.write(typeof a);



const b = undefined;
document.write(b , "<br>");
document.write(typeof b , "<br>");


// when we check typeof an Array or object in js only result show object 

// example with array


let companies =  ["tanbits" , "10pearls", "i2c"];

document.write(companies, "<br>")

document.write(typeof companies, "<br>")


// example with object 

 t  = {
         name: "tanbits",
         city: "lahore",
         services: "web development , mobile app development "
}

document.write(t , "<br>");

document.write(typeof t , "<br>");


// when we store vlave in "" like "45"  then result show data type string 

let m = "56";

document.write(m , "<br>");

document.write(typeof m, "<br>");


// Boolean

var j = 0;
var n = 1;

let v = j < n;
// var result = Boolean(10 > 9);
var result = Boolean(v);
document.write(result) ;


// Array 

// Array has index start index 0 for first value 

let Aray = [1,2,3,4,5,6];

// document.write(Aray);


// for direct access value in array by using index 
document.write(Aray[4]);



// for seperate values 

let num =  [3,4,5,3,6,65];

let sum = 0;

document.write("<ul>")

for ( let i = 0 ; i <=5 ; i++){

    document.write( "<li>" + num[i] +  " </li>");

    sum = sum +  num[i];
}

document.write("</ul>")

document.write("Total sum is " + sum ) ;


// we can also save multiple types of value in Array 

// Example 

let ary = [2, "tanbits",true, null]; 

console.log(ary);


//object 


let h = {

    f_name: "Hassan",
    l_name: "awan",
    age: 23,
    city: "lahore",
    // also we add array in obeject 

    favCities: ["isb", "bwp", "khi"],

    // also we add function in an object 

    salary: function(){
        return 25000;
    },

    // add another function in an object 

    fullName: function(){
        return this.f_name + "" , this.l_name;
    }

}


// update value by using reference of an variable 

// h = {
//     age: 34,
// }

console.log(h);

document.write(h.fullName());

// document.write(h.salary());

 /*
document.write(h.city);
console.log(h.age);
console.log(h); ----*/

// document.write(h.favCities[1]);
// document.write(h.favCities);






 







