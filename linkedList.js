class List {
  constructor() {
    this._length = 0;
    this.head = null;
  }
  push(element) {
    const newNode = new ListNode(element);
    const currentNode = this.head;
    if(!currentNode) {
      this.head = newNode;
      this._length++;
      return newNode;
    }
    this.findLastNode(currentNode, newNode);
  }

  findLastNode(currentNode, newNode) {
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this._length++;
    return newNode;
  }

  pop() {
    let currentNode = this.head;
    if(!currentNode) {
      return null;
    }
    this._length--;
    if(!currentNode.nextNode) {
      this.head = null;
      return currentNode;
    }
    while(currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    const removed = currentNode.nextNode;
    currentNode.nextNode = null;
    return removed;
  }
}
