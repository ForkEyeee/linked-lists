class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor() {
    this.head = this.generateHead()
  }

  generateHead() {
    return new Node('example data', null)
  }

  // nodeList() {
  //   return this.head
  // }

  append(value) {
    let currentNode = this.head
    console.log(currentNode.value)
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    currentNode.nextNode = new Node(value, null)
  }

  prepend(value) {
    let newNode = new Node(value)
    newNode.value = this.head.value
    this.head.value = value
    newNode.nextNode = this.head.nextNode
    this.head.nextNode = newNode
  }

  size() {
    let currentNode = this.head
    let count = 0

    while (currentNode !== null && currentNode.hasOwnProperty('value')) {
      count++
      currentNode = currentNode.nextNode
    }

    return count
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currentNode = this.head
    while (currentNode !== null && currentNode.hasOwnProperty('value')) {
      if (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
      } else {
        return currentNode
      }
    }
  }
  at(index) {
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
      } else {
				return null;
			}
    }
		return currentNode
  }

	pop() {
    if (!this.head) {
      throw new Error("Cannot pop from empty list");
    }

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
  }
}

const test = new LinkedList()
