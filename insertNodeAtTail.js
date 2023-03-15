// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

// Function Description

// Complete the insertNodeAtTail function in the editor below.

// insertNodeAtTail has the following parameters:

// SinglyLinkedListNode pointer head: a reference to the head of a list
// int data: the data value for the node to insert
// Returns

// SinglyLinkedListNode pointer: reference to the head of the modified linked list
// Input Format

// The first line contains an integer , the number of elements in the linked list.
// The next  lines contain an integer each, the value that needs to be inserted at tail.

// Constraints

// Sample Input

// STDIN Function ----- -------- 5 size of linked list n = 5 141 linked list data values 141..474 302 164 530 474

// Sample Output

// 141
// 302
// 164
// 530
// 474
// Explanation

// First the linked list is NULL. After inserting 141, the list is 141 -> NULL.
// After inserting 302, the list is 141 -> 302 -> NULL.
// After inserting 164, the list is 141 -> 302 -> 164 -> NULL.
// After inserting 530, the list is 141 -> 302 -> 164 -> 530 -> NULL. After inserting 474, the list is 141 -> 302 -> 164 -> 530 -> 474 -> NULL, which is the final list.'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
    }

};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let tail = new SinglyLinkedListNode();
    tail.data = data;
    if(head === null) {
        head = tail;
    } else{
        let current = head
        while(current.next !== null){
            current = current.next;
        }
        current.next = tail
    }
    return head;
}

function main() {
