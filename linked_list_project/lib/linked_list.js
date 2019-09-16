// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length += 1;
            return this;
        }

        const node = new Node(val);
        this.tail.next = node;
        this.tail = this.tail.next;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;

        let newTail = new Node(null);
        newTail.next = this.head;

        while (newTail.next !== this.tail && newTail.next !== null) {
            newTail = newTail.next;
        }
        const oldTail = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;

        if (this.length === 0) {
            this.head.next = null;
            this.tail.next = null;
            this.head = null;
            this.tail = null;
        }

        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length += 1;
            return this;
        }

        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;

        const oldHead = this.head;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail.next = null;
            this.tail = null;
        }

        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while (node !== null) {
            if (node.value === target) {
                return true;
            }

            node = node.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let node = this.head;
        for (let i = 0; i < this.length; i += 1) {
            if (i === index) {
                return node;
            }

            node = node.next
        }

        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index)

        if (node !== null) {
            node.value = val;
            return true;
        }

        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        
        if (index === 0) {
            const newNode = new Node(val);
            newNode.next = this.head;
            this.nead = newNode;
            this.length += 1;
            return true;
        }

        const node = this.get(index - 1);
        if (node !== null) {
            const newNode = new Node(val);
            const next = node.next;
            node.next = newNode;
            newNode.next = next;
            this.length += 1;
            return true;
        }

        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined;

        if (index === 0) {
            const removedNode = this.get(0)
            this.removeHead();
            return removedNode;
        }

        const prev = this.get(index - 1);
        if (prev !== null) {
            const node = prev.next;
            const next = node.next;

            prev.next = next;
            this.length -= 1;
            return node;
        }

        return undefined;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
// console.log(list.removeTail());
// console.log(list.contains(1));




exports.Node = Node;
exports.LinkedList = LinkedList;
