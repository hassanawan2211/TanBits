// Event loop 

// The event loop is responsible for managing the execution of code
// handling events, and maintaining the flow of control
// the event loop is a fundamental mechanism that enables the asynchronous execution of code


// How do Event loops work?

// 1)Call Stack
// JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution)

// 2)Callback Queue
// Asynchronous operations such as I/O operations or timers
// handled by the browser or Node.js runtime
// When these operations are complete
// corresponding functions (callbacks) are placed in the callback queue

// 3)Event Loop
// event loop continuously checks the call stack and the callback queue
// If the call stack is empt
// it takes the first function from the callback queue and pushes it onto the call stack for execution

// 4)Execution
// function on top of the call stack is executed
// If this function contains asynchronous code
// it might initiate further asynchronous operations

// 5)Callback Execution
// When an asynchronous operation is complete
// its callback is placed in the callback queue

// 6)Repeat
// The event loop continues this process ensuring that the call stack is always empty before taking the next function from the callback queue


// Example of the event loop 

// The event loop is responsible for executing the code
// collecting and processing events
//   and executing queued sub-tasks 1
//   The call stack is used to keep track of function calls
//    while the message queue is used to store messages that are waiting to be processed 1
//   When the call stack is empty
//    the event loop checks the message queue for any pending messages
//If there are any messages the event loop will push them onto the call stack and execute them 1

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
