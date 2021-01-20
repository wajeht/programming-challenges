class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);
        let current = this.head;

        if (this.head === null) {
            this.head = node;
            this.length++;
        } else {
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            this.length++;
        }
    }

    insert(index, data) {
        const node = new Node(data);
        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = node;
            node.next = current;
            this.length++;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
            this.length++;
        }
    }

    pop() {
        let current = this.head;
        let previous = null;

        while (current.next != null) {
            previous = current;
            current = current.next;
        }

        // console.log(current.data, 'was here');
        previous.next = null;
        this.length--;
    }

    remove(index) {
        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
            this.length--;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            this.length--;
        }
    }

    compress() {
        let current = this.head;

        while (current.next != null) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const sll = new SinglyLinkedList();
sll.push('first');
sll.push('second');
sll.push('second');
sll.push('third');
sll.push('third');
sll.push('fifth');
sll.print();
console.log();

console.log('---------- inserted at index 1 ----------');
sll.insert(0, '***inserted***');
sll.print();
console.log();

console.log('---------- popped last node ----------');
sll.pop();
sll.print();
console.log();

console.log('---------- removed first node ----------');
sll.remove(0);
sll.print();
console.log();

console.log('---------- compress ndoes ----------');
sll.compress();
sll.print();
console.log();
