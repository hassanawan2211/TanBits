// Tree
// A tree data structure is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search
//  It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes. 

// The topmost node of the tree is called the root, and the nodes below it are called the child nodes. Each node can have multiple child nodes, and these child nodes can also have their own child nodes, forming a recursive structure.

// Basic Terminologies In Tree Data Structure:
// Parent Node:
// The node which is a predecessor of a node is called the parent node of that node. {B} is the parent node of {D, E}.
// Child Node:
// The node which is the immediate successor of a node is called the child node of that node. Examples: {D, E} are the child nodes of {B}.
// Root Node:
// The topmost node of a tree or the node which does not have any parent node is called the root node. {A} is the root node of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.
// Leaf Node or External Node:
// The nodes which do not have any child nodes are called leaf nodes. {K, L, M, N, O, P, G} are the leaf nodes of the tree.
// Ancestor of a Node:
// Any predecessor nodes on the path of the root to that node are called Ancestors of that node. {A,B} are the ancestor nodes of the node {E}
// Descendant:
// Any successor node on the path from the leaf node to that node. {E,I} are the descendants of the node {B}.
// Sibling:
// Children of the same parent node are called siblings. {D,E} are called siblings.
// Level of a node:
// The count of edges on the path from the root node to that node. The root node has level 0.
// Internal node:
// A node with at least one child is called Internal Node.
// Neighbour of a Node:
// Parent or child nodes of that node are called neighbors of that node.
// Subtree:
// Any node of the tree along with its descendant.


// Representation of a Node in Tree Data Structure:
// struct Node
// {
//    int data;
//    struct Node *first_child;
//    struct Node *second_child;
//    struct Node *third_child;
//    .
//    .
//    .
//    struct Node *nth_child;
// };


// Basic Operation Of Tree Data Structure:
// Create
// – create a tree in the data structure.
// Insert 
//− Inserts data in a tree.
// Search 
//− Searches specific data in a tree to check whether it is present or not.
// Traversal:
// Preorder Traversal – perform Traveling a tree in a pre-order manner in the data structure.
// In order Traversal – perform Traveling a tree in an in-order manner.
// Post-order Traversal –perform Traveling a tree in a post-order manner.


// Advantages of Tree Data Structure:
// Tree offer Efficient Searching Depending on the type of tree, with average search times of O(log n) for balanced trees like AVL. 
// Trees provide a hierarchical representation of data, making it easy to organize and navigate large amounts of information.
// The recursive nature of trees makes them easy to traverse and manipulate using recursive algorithms.
// To learn more about the advantages of Tree Data Structure, refer to this article.

// Disadvantages of Tree Data Structure:
// Unbalanced Trees, meaning that the height of the tree is skewed towards one side, which can lead to inefficient search times.
// Trees demand more memory space requirements than some other data structures like arrays and linked lists, especially if the tree is very large.
// The implementation and manipulation of trees can be complex and require a good understanding of the algorithms.