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

  nodeList() {
    return this.head
  }

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
    //loop through object and each loop will be an index g
  }
}

const test = new LinkedList()
