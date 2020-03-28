class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, key) {
        let tempNode = this.head;
        while (tempNode.next.value != key) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, tempNode.next);
    }

    insertAfter(item, key) {
      let tempNode = this.head;
      while (tempNode.value != key) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode.next);
    }
    
    insertAt(item, key) {
      let tempNode = this.head;
      if (key == 1) {
        this.insertFirst(item);
      }
      for (let i = 2; i < key; i++) {
        if (tempNode.next == null) {
          throw Error(
            `There are less than ${key} nodes in this list. Try again foo!`
          );
        }
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode.next);
    }

    find(item) { 
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item){ 
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList