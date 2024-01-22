// fundamentals question 

// reverse of an array 

// let arr = [1,2,3,4,5];

// let start = 0;

// let end = arr.length -1;

// while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end]  = temp;

//     start++;
//     end--;
// }

// console.log(arr);



// find max and min element of an array 

// let arr = [0,1,2,3,4,5,6];

// let max = arr[0];

// let min = arr[0]


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }else if(arr[i]< min){
//         min = arr[i]
//     }
// }

// console.log(min);
// console.log(max);


// palindrom string 

// let str = "mam";

// let start = 0;

// let end = str.length-1;

// let check = "yes";

// while(start < end){
//     if (str[start] !== str[end]){
//         check = "No"
//         console.log(check , "this this not a palinderom");

        
//         break;
//     }
//     start++;
//     end--;
// }

// if (check === "yes"){
// console.log(check, "this is palindrom ")
// }


// sorting of an array 

// let str = ["h","b", "c", "a"];

// for(let i =0 ; i < str.length; i++){
//     for(let j=0; j < str.length -1-i;j++){
//         if(str[j] > str[j+1]){
//             let temp = str[j];
//             str[j] = str[j+1];
//             str[j+1] = temp;
//         }
//     }
// }

//  console.log(str);


 // sum of the whole element of the array 

//  let arr = [1,2,3,4,5,6,7,8];

//  let sum = 0;

//  for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//  }

//  console.log(sum);

// Average of the whole elements  array 

// let arr = [1,2,2,3,4,5];

// let sum = 0;


// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//      avg = sum / arr.length;

// }

// console.log(avg);


// add new element of the array 

// let arr = [1,2,5];

// let new_ele = 5;

// let new_arr = [];

// for(let i = 0; i < arr.length; i++){
// new_arr [i] = arr[i]
// }

// new_arr[arr.length] = new_ele;

// console.log(new_arr);

// find even number of an array 

let arr = [1,2,3,4,5,6,7,8,9,10];
let new_arr= [];

for (let i =0; i < arr.length; i++){
    if(arr[i]%2===0){
       
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);