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
    this.appendLastNode(currentNode, newNode);
  }

  appendLastNode(currentNode, newNode) {
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this._length++;
    return newNode;
  }

  pop() {
    const currentNode = this.head;
    if(!currentNode) {
      return null;
    }
    this._length--;
    if(!currentNode.nextNode) {
      this.head = null;
      return currentNode;
    }
    return this.popLastNode(currentNode);
  }

  popLastNode(currentNode) {
    while(currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    const removed = currentNode.nextNode;
    currentNode.nextNode = null;
    return removed;
  }

  delete(nodeKey) {
    const currentNode = this.head;
    if(currentNode.data.includes(nodeKey) && !currentNode.nextNode) {
      this.head = null;
      this._length--;
      return currentNode;
    }
    if(currentNode.data.includes(nodeKey) && currentNode.nextNode) {
      this.head = currentNode.nextNode;
      this._length--;
      return currentNode;
    }
    this.deleteNestedNode(currentNode, nodeKey);
  }

  deleteNestedNode(currentNode, nodeKey) {
    while(currentNode.nextNode && !currentNode.nextNode.data.includes(nodeKey)) {
      currentNode = currentNode.nextNode;
    }
    if(!currentNode.nextNode) {
      return currentNode;
    }
    if(!currentNode.nextNode.nextNode) {
      currentNode.nextNode = null;
      this._length--;
      return currentNode;
    }
    if(currentNode.nextNode.data.includes(nodeKey)) {
      const reasignNode = currentNode.nextNode.nextNode;
      currentNode.nextNode = reasignNode;
      this._length--;
    }
  }
}
