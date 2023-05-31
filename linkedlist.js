class LinkedList {
  static list = [2]

  static nodeList() {
    return this.list
  }
}

class Node {
	constructor(value, nextNode) {
		this.value = value
		this.nextNode = nextNode
	}

	static append(value) {

	}

}

console.log(LinkedList.nodeList())
