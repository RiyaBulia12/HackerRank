// This challenge is part of a tutorial track by MyCodeSchool and is accompanied by a video lesson.

// Given a pointer to the head of a linked list, insert a new node before the head. The  value in the new node should point to  and the  value should be replaced with a given value. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.

// Function Description

// Complete the function insertNodeAtHead in the editor below.

// insertNodeAtHead has the following parameter(s):

// SinglyLinkedListNode llist: a reference to the head of a list
// data: the value to insert in the  field of the new node
// Input Format

// The first line contains an integer , the number of elements to be inserted at the head of the list.
// The next  lines contain an integer each, the elements to be inserted, one per function call.

// Constraints

// Sample Input

// 5
// 383
// 484
// 392
// 975
// 321
// Sample Output

// 321
// 975
// 392
// 484
// 383
// Explanation

// Intially the list in NULL. After inserting 383, the list is 383 -> NULL.
// After inserting 484, the list is 484 -> 383 -> NULL.
// After inserting 392, the list is 392 -> 484 -> 383 -> NULL.
// After inserting 975, the list is 975 -> 392 -> 484 -> 383 -> NULL.
// After inserting 321, the list is 321 -> 975 -> 392 -> 484 -> 383 -> NULL.


'use strict';

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
        this.tail = null;
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

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode();
    newNode.data = data;
    if(head === null){
        head = newNode;
    } else {
        let current = head;
        newNode.next = current;
        head = newNode;
    }
    return head;
}

function main() {
