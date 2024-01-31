 // Queue data structure 
 // A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

// Basic Operations of Queue

// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it

//working of the queue
// two pointers FRONT and REAR
// FRONT track the first element of the queue
// REAR track the last element of the queue
// initially, set value of FRONT and REAR to -1

// Enqueue Operation
// check if the queue is full
// for the first element, set the value of FRONT to 0
// increase the REAR index by 1
// add the new element in the position pointed to by REAR

// Dequeue Operation
// check if the queue is empty
// return the value pointed by FRONT
// increase the FRONT index by 1
// for the last element, reset the values of FRONT and REAR to -1


 // problem question of the stack 

  // reverse of an queue
// let queue = [5,4,3,2,1,0,-1];
// let stack = [];

// while (queue.length > 0) {
//     stack.push(queue.shift());
// }
// while (stack.length > 0) {
//     queue.push(stack.pop());
// }
// console.log(queue);

// add new element in the queue

// let queue = [-2,4,-6,4,5,-6];
// let new_Element = 6;
// queue[queue.length] = new_Element;
// console.log(queue);

// remove of an element in the queue

//  let queue = [1,2,3,4,5];
//  for(let i=0; i< queue.length - 1; i++){
//      queue[i] = queue[i + 1];
// }
// queue.length--;

//  console.log(queue)

// queue add an element in the queue by enqueue

// const queue = {
//     items: [],
    
//     enqueue(item) {
//       this.items[this.items.length] = item;
//     },
    
//     dequeue() {
//       const item = this.items[0];
//       this.items.splice(0, 1);
//       return item;
//     },
    
//     isEmpty() {
//       return this.items.length === 0;
//     },
    
//     size() {
//       return this.items.length;
//     },
    
//     peek() {
//       return this.items[0];
//     }
//   };
  
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
//   queue.enqueue(5);

// remove an element from queue by dequeue

// const queue = {
//     items: [],
    
//     enqueue(item) {
//       this.items[this.items.length] = item;
//     },
    
//     dequeue() {
//       const item = this.items[0];
//       this.items.splice(0, 1);
//       return item;
//     },
    
//     isEmpty() {
//       return this.items.length === 0;
//     },
    
//     size() {
//       return this.items.length;
//     },
    
//     peek() {
//       return this.items[0];
//     }
//   };
  
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
//   queue.enqueue(5);
//   queue.enqueue(4);
//   console.log(queue.dequeue());
//   console.log(queue.dequeue());

  // for checking peek value and also check the size of queue and check queue is empty 

  const queue = {
    items: [],
    
    enqueue(item) {
      this.items[this.items.length] = item;
    },
    
    dequeue() {
      const item = this.items[0];
      this.items.splice(0, 1);
      return item;
    },
    
    isEmpty() {
      return this.items.length === 0;
    },
    
    size() {
      return this.items.length;
    },
    
    peek() {
      return this.items[0];
    }
  };
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(5);
  queue.enqueue(4);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.peek()); 
  console.log(queue.size()); 
  console.log(queue.isEmpty());