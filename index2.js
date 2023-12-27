// syntax for html code write in javascript

document.write("Hello Tanbits <br>"  );


// document.write  used for Write some HTML elements directly to the HTML output


// comments Two types in javascript 

// single line comment (can be added by using two forward slashes //),

document.write("welcome to tanbits <br>")   // company msg 


// <br> tag is used for next line 


// multiple line comment (for multiple lines comment in js then use /*   write code here        */)



/* ---- document.write(" I have joine tanbits as  a MERN stack intern <br>"); 
 document.write(" I have joine tanbits as  a MERN stack intern <br>"); 
 document.write(" I have joine tanbits as  a MERN stack intern"); ---- */





// javascript Variables 


// Automatically
// using let 
// using var
// using const


//Automatically

x = 5;
y = 8;
z = x + y;
document.write(z ,"<br>");


// Using Var

var x = 12;
var y = 12;
var z = x+y;
document.write(z , "<br>");




var x = "Tanbits";
var y = "Welcome to Tanbits family";

document.write(x , "<br>");
document.write(y , "<br>");



// Using mixed variable 


const T = 50;
const r = 50;
let g = T + r;

document.write(g);




// value also overwrite in var  


var y = "Ali";
var z = "Hassan"
y = "Awan"

document.write(y);


// how to write variable name in javascript 


// write way 

let firstname = "Ali";
console.log(firstname);



let first_name = "Hassan"
console.log(first_name);



let $companyname = "company name is Tanbits"
console.log($companyname);




let _companyname = " my company name is Tanbits"
console.log(_companyname);




// cammel case 


const myName = "Hassan awan "
console.log(myName);



// worng way

/* -------let company-name = "tanbits";
console.log(company-name)



let 99companyname = "company name is Tanbits"


let company name = "Tanbits"
 ---------- */






 // scope 


 /*                         

function myFun() {
    var companyName  = "Tanbits";
    console.log(companyName);
}

myFun();  
console.log(companyName); 

*/



// types of scope 



// function scope 


/*
function age() {
    var myAge = 22;
    console.log(myAge); 
}

age();  

console.log(myAge);  
*/



// Block-scope

/*
if(true) {
    let employeName = "Malik Hassan";
    console.log(employeName);  
}
console.log(employeName);  */



// reverse of an array 
/*
let array = [5,4,3,2,1]
 let left = 0;
 let right = array.length - 1;
 while(left < right){
    const tempStart = array[left];
    const tempEnd = array[right];
    array[left] = tempEnd;
    array[right] = tempStart;
    left++;
    right--;
 }

 console.log(array);
 */




 // Using let 

 // let is blocked scope 

// we can update varable value but don't redeclared in let 

 let uniName = "IUB";

 uniName = "NUST";

  
 
 console.log(uniName);



 // Using  const 

 // cannot be updated and don't re-declared in const


 const cityName = "Lahore";



  
 
 console.log(cityName);

