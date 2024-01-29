// console.log("ali")
// console.log("ali")
// console.log("ali")
// function sum(){
//     return 2 + 5 + "3";
// }
// sum();
// console.log(sum());
// console.log("fff")


// function callback_hell(){
//       setTimeout(()=>{
//         console.log("this is first function ")
//         setTimeout(()=>{
//           console.log("this is second function")
//           setTimeout(()=>{
//             console.log("this is thired function ")
//           },1000)
//         },3000)
//       },2000)
//     }

//     callback_hell();


 
    
    // function main_f(last_f){
    
    //   setTimeout(()=>{
    //     console.log("tanbits run after 2 seconds")
    
    //     last_f();
    //   }, 2000)
    
    // }
    
    // function f2(){
    //   console.log("this is last function ")
    // }

    // main_f(f2);


    // let array = [1,2,3,4,5,6,7,8,9,10];
    // let new_array = [];
    // for(let i =0; i < array.length; i++){
    //     if(array[i] / 2 == 0){
    //         new_array.push();
    //     }else{
    //         console.log("error")
    //     }
    // }
    // console.log(new_array);


// let array = [1,2,3,4,5,6,7,8,9,10];
// let arr = new Array;
// for(let i = 0; i < array.length; i++){
//     switch(true){
// case (array [i]%2 == 0 ):
//     console.log(array[i] )
//     break;
   
//     }
// }



//     let p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("this is first function")
//             resolve("Success")
//         },2000)

//     }).then((result)=>{
// console.log(result)
//     }).catch((error)=>{
// console.log(error)
//     })
// console.log(p1)



// let obj1 = {
//     name: "ali",
//     city: "lhr",
//     company: "tanbits",
//     services:{
//         stack: "mern",
//         editor:"vs"
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.services.editor = "atom"

// console.log(obj1);
// console.log(obj2);


// let array1 = [1,2,3,4,5];

// let array2 = [6,7,8,9,10];

// let Array = [...array1,...array2]
// console.log(Array)


// let obj1 = {
//     name: "ali",
//     company: "tanbits"
// }

// let {
//     fullname:
//     companyName

// } = obj1

// console.log(companyName)


// let array = [1,2,3,4,5,6]

//  array = [];

//  console.log(array);

 

// try{ 
// getData()
// }catch(e){
// alert(e)
// }

// function abcd (val){

//      }
    
//     abcd(function(){
    
//     });

// let array = [2,3,4,5,6,7,8];
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     average = sum / array.length;
// }
// console.log(average);

// let array = [2,3,1,5,6,2,4,19,3];
// for(let i =0; i < array.length; i++){
//     for(let j=0; j< array.length-1-i;j++){
//         if(array[j]>array[j+1]){
//             let temp = array[j];
//             array[j] = array[j+1]
//             array[j+1] = temp;
//             break;
//         }
//     }
// }
    
// console.log(array);

// function filterArray(array){
//  (new_array)=>{ new_array.value == -1;

// }
 

// }
// console.log(filterArray([1,-2,3,-5,-1]));


// let minutes = 5;
// let second = minutes * 60;
// console.log(second);

// let num = 10
// let isdivided = 10 %10 === 1;
// console.log(isdivided);

// let array = [1,2,3,4,5,6,7,8,9]
//  min = array[0];
// max = array[0];
// for(let i =0; i < array.length; i++){
//     if(min > array[i]){
//         min = array[i]
//     }else if(max < array[i]){
//         array[i]= max
//     }
// }
 
//  console.log(min);
//  console.log(max);

// function isMinMax(array){
// let max = array[0];
// let min = array[0];
// for(let i = 0; i < array.length; i++){
//     if(max < array[i]){
//         max =  array[i];
        
//     }else if(min > array[i]){
//         min = array[i];
//     }
// }
// }
//  isMinMax([1,2,3,4,5,6,7]);"



let str = "ali"
let new_str = "";
for(let i = 0; i < str.length; i++){
    new_str += str[i] + str[i];
}

console.log(new_str);

  