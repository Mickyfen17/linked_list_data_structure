class List {
  constructor() {
    this._length = 0;
    this.head = null;
  }
  push(element) {
    // debugger
    let newNode = new ListNode(element);
    let currentNode = this.head;
    if(!currentNode) {
      this.head = newNode;
      this._length++;
      return newNode;
    }
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this._length++;
    return newNode;
  }
}
