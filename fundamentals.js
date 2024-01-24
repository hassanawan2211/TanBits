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

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let new_arr= [];

// for (let i =0; i < arr.length; i++){
//     if(arr[i]%2===0){
       
//         new_arr.push(arr[i]);
//     }
// }
// console.log(new_arr);


// Move all the negative elements to one side of the array

// let arr = [-11,3,5,-4,-6,10,-2,3,4,-5];
// let j = 0;
// for(let i =0; i < arr.length; i++){
//     if(arr[i] < 0){
//         if(i !== j){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//         j++;
//     }
// }

// console.log(arr);


// Find the Union and Intersection of the two sorted arrays

// let arr1 = [1,2,3,4,5,6];

// let arr2 = [4,5,6,7,8,9];

// let i = 0;

// let j = 0;

// let Union = [];

// let intersection = [];

// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//     Union.push(arr1[i])
//     i++;
//     }else if (arr1[i] > arr2[j]){
//         Union.push(arr2[j])
//         j++;
//     }else{
//         Union.push(arr1[i])
//         intersection.push(arr1[i]);
//         i++;
//         j++;
//     }
// }

// while(i < arr1.length){
// Union.push(arr1[i])
// i++;
// }

// while(j < arr2.length){
//     Union.push(arr2[j]);
//     j++
// }

// console.log(Union);

// console.log(intersection);

// subarray with given sum 

// let arr = [1, 4, 20, 3, 10, 5];
// let sum = 33;
// let currentSum = arr[0], start = 0;
// for (let i = 1; i <= arr.length; i++) {
//     while (currentSum > sum && start < i - 1) {
//         currentSum = currentSum - arr[start];
//         start++;
//     }
//     if (currentSum === sum) {
//         console.log(`The subarray with the given sum is: [${arr.slice(start, i)}]`);
//         return;
//     }
//     if (i < arr.length) {
//         currentSum = currentSum + arr[i];
//     }
// }
// console.log("No subarray found.");


// Sort the array of 0s, 1s, and 2s

// let arr = [0, 1, 2, 0, 1, 2, 1, 1, 0, 2];
// let low = 0, mid = 0, high = arr.length - 1;
// while (mid <= high) {
//     if (arr[mid] === 0) {
//         let temp = arr[low];
//         arr[low] = arr[mid];
//         arr[mid] = temp;
//         low++;
//         mid++;
//     } else if (arr[mid] === 1) {
//         mid++;
//     } else {
//         let temp = arr[mid];
//         arr[mid] = arr[high];
//         arr[high] = temp;
//         high--;
//     }
// }
// console.log(`The sorted array is: [${arr}]`);


// Find the occurrence of an integer in the array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = 5;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//         count++;
//     }
// }
// if (count > 0) {
//     console.log(`The integer ${x} occurs ${count} times in the array.`);
// } else {
//     console.log(`The integer ${x} does not occur in the array.`);
// }
 



// // Find a peak element which is not smaller than its neighbors

// let arr = [5, 10, 20, 15, 2, 23, 90, 67];
// let peak = -1;

// // Check if the first or last element is a peak
// if (arr[0] >= arr[1]) {
//   peak = arr[0];
// } else if (arr[arr.length - 1] >= arr[arr.length - 2]) {
//   peak = arr[arr.length - 1];
// } else {
//   // Traverse the array from the second index to the second last index
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//       peak = arr[i];
//       break;
//     }
//   }
// }

// if (peak === -1) {
//   console.log("No peak element found");
// } else {
//   console.log(`The peak element is ${peak}`);
// }
