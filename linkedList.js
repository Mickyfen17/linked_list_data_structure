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

  toArray() {
    let nodeArray = [];
    const currentNode = this.head;
    if(!currentNode) {
      return nodeArray;
    }
    nodeArray = this.pushToArray(currentNode, nodeArray);
    return nodeArray;
  }

  pushToArray(currentNode, array) {
    while(currentNode.nextNode) {
      array.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    array.push(currentNode.data);
    return array;
  }

  lastNode() {
    let currentNode = this.head;
    if(!currentNode) {
      return null;
    }
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  include(nodeKey) {
    let currentNode = this.head;
    while(currentNode.nextNode) {
      if(currentNode.data.includes(nodeKey)) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(nodeKey) {
    let currentNode = this.head;
    while(currentNode.nextNode) {
      if(currentNode.data.includes(nodeKey)) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  index(nodeKey) {
    let currentNode = this.head;
    let count = 0;
    while(currentNode) {
      if(currentNode.data.includes(nodeKey)) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  insert(index, element) {
    let currentNode = this.head;
    let count = 0;
    while(currentNode) {
      if(index-1 === count) {
        const newNode = new ListNode(element);
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        this._length++;
        return currentNode;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }
}
