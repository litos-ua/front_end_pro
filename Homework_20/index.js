'use strict'

class Node {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.prev = previous;
        this.next = next;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    length() {
        let count = 0;
        for (let tmpNode = this.head; tmpNode; count++) {
            tmpNode = tmpNode.next;
        }
        return count;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let tmpValue;
            for (tmpValue = this.head; tmpValue.next; ) {
                tmpValue = tmpValue.next;
            }
            tmpValue.next = newNode;
            newNode.prev = tmpValue;
        }
    }


    remove(value) {
        let removed = false;
        for (let currentNode = this.head; currentNode;) {
            if (currentNode.value === value) {
                if (currentNode.prev) {
                    currentNode.prev.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }
                if (currentNode.next) {
                    currentNode.next.prev = currentNode.prev;
                }

                removed = true;
            }

            currentNode = currentNode.next;
        }
        if (!removed) console.log(`Element ${value} did not find`);
        return removed;
    }


    search(value) {
        let resSearch = [];
        for (let tmpValue = this.head; tmpValue; ) {
            if (tmpValue.value === value) {
                resSearch.push(tmpValue);
            }
            tmpValue = tmpValue.next;
        }
        if (resSearch.length === 0) console.log(`No match found for "${value}"`);
        return resSearch.length > 0 ? resSearch : null;
    }

    toArray() {
        const array = [];
        for (let tmpValue = this.head; tmpValue; ) {
            array.push(tmpValue.value);
            tmpValue = tmpValue.next;
        }
        return array;
    }
}

const doublyList1 = new DoublyLinkedList();
const doublyList2 = new DoublyLinkedList()

const dataValues = [
    'data_00', 'data_01', 'data_02', 'data_03', 'data_04', 'data_05', 'data_06', 'data_07',
    'data_00', 'data_01', 'data_02', 'data_03', 'data_04', 'data_05', 'data_06', 'data_07',
];
dataValues.forEach((value) => {
    doublyList1.add(value);
});

console.log(doublyList1);


dataValues.forEach((value) => {
    doublyList2.add(value);
});

console.log('Length:', doublyList2.length());
console.log('List:', doublyList2.toArray());

const searchData1 = 'data_03', searchData2 = 'data_55';
let searchResult = doublyList2.search(searchData1);
if (searchResult) console.log(`Search result for "${searchData1}":`, searchResult);
searchResult = doublyList2.search(searchData2);
if (searchResult) console.log(`Search result for "${searchData2}":`, searchResult);

const elementForRemoving1 = 'data_55', elementForRemoving2 = 'data_04';
if (doublyList2.remove(elementForRemoving1)) {
    console.log(`Element ${elementForRemoving1} has removed`);
    console.log(`List after removing ${elementForRemoving1}:`, doublyList2.toArray());
}
if (doublyList2.remove(elementForRemoving2)) {
    console.log(`Element ${elementForRemoving2} has removed`);
    console.log(`List after removing ${elementForRemoving2}:`, doublyList2.toArray());
}



