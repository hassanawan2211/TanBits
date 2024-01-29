// Stack

// A Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle. In the pushdown stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack.
// There are basically three operations that can be performed on stacks. They are:
// inserting an item into a stack (push).
// deleting an item from the stack (pop).
// displaying the contents of the stack (peek or top).
// A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top. A helpful analogy is to think of a stack of books; you can remove only the top book, also you can add a new book on the top.

// why and when used queue and stack instead of arrays&linkedlist .

// Queues and stacks are dynamic while arrays are static. So when we require dynamic memory we use queue or stack over arrays. Stacks and queues are used over arrays when sequential access is required. To efficiently remove any data from the start (queue) or the end (stack) of a data structure.

// static and dynamic memory 

// Static memory allocation is used when the size of the data structure is fixed, and memory usage needs to be optimized. Dynamic memory allocation is used when the size of the data structure is not known in advance, and when flexibility and efficiency are important.


// problems questions 

// reverse of an stack with built-in method

// let stack = [5,4,3,2,1];
// let reversed_Stack = [];

// while (stack.length > 0) {
//   reversed_Stack.push(stack.pop());
// }

// console.log(reversed_Stack);

// with out built in method reverse of an stack

// let stack = [9,8,7,6,5,4,3,2,1];
// let reverse_Stack = [];

// while (stack.length > 0) {
//   reverse_Stack[reverse_Stack.length] = stack[stack.length - 1];
//   stack.length--;
// }

// console.log(reverse_Stack);


// add new element in stack 

// let stack = [3,4,5,6];
// let new_Element = 7;
// stack[stack.length] = new_Element;

// console.log(stack);


// delete of an element of stack 

// let stack = [5,4,3,5];
// let indexDelete = 3;

// for (let i = indexDelete; i < stack.length - 1; i++) {

//     stack[i] = stack[i + 1];

// }

// stack.length = stack.length - 1;

// console.log(stack);

// sorting of stack 

// asscending order 

// let stack = [3,4,5,6,1,2,3];
// let temp;

// for (let i = 0; i < stack.length; i++) {
//     for (let j = i + 1; j < stack.length; j++) {
//         if (stack[i] > stack[j]) {
//             temp = stack[i];
//             stack[i] = stack[j];
//             stack[j] = temp;
//         }
//     }
// }

// console.log(stack);


// descending order 

let  stack = [1,4,8,9,2,3,4,1,2,4];
let temp;

for (let i = 0; i < stack.length; i++) {
    for (let j = i + 1; j < stack.length; j++) {
        if (stack[i] < stack[j]) {
            temp = stack[i];
            stack[i] = stack[j];
            stack[j] = temp;
        }
    }
}

console.log(stack);