//....LINKLIST....//

// Linked List is a linear data structure
// in which elements are not stored at a contiguous location
// rather they are linked using pointers
// Linked List forms a series of connected nodes
// where each node stores the data and the address of the next node

// Node Structure
//  A node in a linked list typically consists of two components

// Data
// It holds the actual value or data associated with the node

// Next Pointer
//  It stores the memory address (reference) of the next node in the sequence

// Head and Tail
//  The linked list is accessed through the head node
//  which points to the first node in the list
//  The last node in the list points to NULL or nullptr
//  indicating the end of the list
//  This node is known as the tail node

// Why linked list data structure needed?

// few advantages of a linked list

// Dynamic Data structure
// The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion

// Ease of Insertion/Deletion
// The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion
//  Just the address needed to be updated

// Efficient Memory Utilization
// As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory

// Implementation
// Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc

// ... EXAMPLE...//

// In a system, if we maintain a sorted list of IDs in an array id[] = [1000, 1010, 1050, 2000, 2040]

// If we want to insert a new ID 1005 then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000)

// Deletion is also expensive with arrays until unless some special techniques are used
// For example
//  to delete 1010 in id[] everything after 1010 has to be moved due to this so much work is being done which affects the efficiency of the code

// ... Types of LinkList ... //

// 1)Single-linked list
// In a singly linked list each node contains a reference to the next node in the sequence
// Traversing a singly linked list is done in a forward direction

// 2)Double linked list
// In a doubly linked list each node contains references to both the next and previous nodes
// This allows for traversal in both forward and backward directions
// but it requires additional memory for the backward reference

// 3)Circular linked list
// In a circular linked list the last node points back to the head node, creating a circular structure
// It can be either singly or doubly linked

//...Operations on Linked Lists...//

// Insertion
// Adding a new node to a linked list involves adjusting the pointers of the existing nodes to maintain the proper sequence
//  Insertion can be performed at the beginning end, or any position within the list

// Deletion
//  Removing a node from a linked list requires adjusting the pointers of the neighboring nodes to bridge the gap left by the deleted node
//  Deletion can be performed at the beginning, end, or any position within the list

// Searching
//  Searching for a specific value in a linked list involves traversing the list from the head node until the value is found or the end of the list is reached

// ... advantages of Linked List...// 

// Dynamic Size
//  Linked lists can grow or shrink dynamically, as memory allocation is done at runtime

// Insertion and Deletion
//  Adding or removing elements from a linked list is efficient, especially for large lists

// Flexibility
//  Linked lists can be easily reorganized and modified without requiring a contiguous block of memory

// ... disadvantages of Linked list ... //

// Random Access
//  Unlike arrays, linked lists do not allow direct access to elements by index. Traversal is required to reach a specific node

// Extra Memory
// Linked lists require additional memory for storing the pointers, compared to arrays


// EXample of linked list 

// javascript implementation of singly linked list

// The head, node1, and node2 objects are created with the data and next properties. 
// The head.next property is assigned to node1, and node1.next property is assigned to node2.

// let head = { data: 0, next: null };
// let node1 = { data: 1, next: null };
// let node2 = { data: 2, next: null };
// let node3 = { data: 3, next: null};
// let node4 = { data:4, next: null};

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4
// console.log(node3);

// Head pointer always points to first element of the linked list
// struct node *head = NULL;


// Printing data in each node

// To print the data on each node,
// you can use a while loop to traverse the linked list and log the data property of each node.
 // Here is the updated code:

//  let head = { data: 0, next: null };
// let node1 = { data: 1, next: null };
// let node2 = { data: 2, next: null };
// let node3 = { data: 3, next: null};
// let node4 = { data:4, next: null};
// let node5 = { data:5, next: null};

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4
// node4.next = node5

// let current = head;
// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }


// Insertion at the beginning

// To insert a new node at the beginning of the linked list,
//  we create a new node with the desired data and set its next property to the current head.
//   We then set the head to the new node. In this example,
//    we are inserting a node with data -1 at the beginning of the linked list


// let head = { data: 0, next: null };
// let node1 = { data: 1, next: null };
// let node2 = { data: 2, next: null };
// let node3 = { data: 3, next: null};
// let node4 = { data:4, next: null};
// let node5 = { data:5, next: null};

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// let newNode = { data: -1, next:head};
// head= newNode;

// let current = head;
// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }


// Deletion at the beginning

// we first created a linked list with 6 nodes
// Then we added a new node at the beginning of the linked list and deleted the first node
// Finally, we printed the data of all the nodes in the linked list except the first node, which was deleted


// let head = { data: -1, next: null };
// let node1 = { data: 1, next: null };
// let node2 = { data: 2, next: null };
// let node3 = { data: 3, next: null};
// let node4 = { data:4, next: null};
// let node5 = { data:5, next: null};

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// head = head.next;

// let current = head;
// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }


//for checking the  size of the link list 

// used a while loop to traverse the linked list and count the number of nodes in it
// we printed the size of the linked list

// let head = { data: -1, next: null };
// let node1 = { data: 1, next: null };
// let node2 = { data: 2, next: null };
// let node3 = { data: 3, next: null};
// let node4 = { data:4, next: null};
// let node5 = { data:5, next: null};

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// let count = 0;
// let current = head;
// while (current !== null) {
//     count++;
//     current = current.next;
// }
// console.log(count);


// for searching 



















