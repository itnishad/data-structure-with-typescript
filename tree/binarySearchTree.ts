class BNode<T> {
  public value: T;
  public left: BNode<T> | null;
  public right: BNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  public root: BNode<T> | null = null;
  // constructor(root: BNode<T>) {
  //   this.root = root;
  // }

  isEmpty() {
    return this.root === null;
  }

  insert(value: T) {
    const newNode = new BNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root: BNode<T>, newNode: BNode<T>) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root: BNode<T> | null, value: T): boolean {
    if (!root) {
      return false;
    } else {
      if (root.value > value) {
        return this.search(root.left, value);
      }
      return this.search(root.right, value);
    }
  }

  preOrder(root: BNode<T> | null) {
    if (!root) return;

    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root: BNode<T> | null) {
    if (!root) return;

    this.preOrder(root.left);
    console.log(root.value);
    this.preOrder(root.right);
  }

  postOrder(root: BNode<T> | null) {
    if (!root) return;

    this.preOrder(root.left);
    this.preOrder(root.right);
    console.log(root.value);
  }

  levelOrder() {
    if (this.root === null) {
      return;
    }

    const queue = new Queue<BNode<T>>();
    queue.enqueue(this.root);
    while (queue.size) {
      let current = queue.dequeue();
      if (current) {
        console.log(current.value);
        if (current.left) {
          queue.enqueue(current.left);
        }
        if (current.right) {
          queue.enqueue(current.right);
        }
      }
    }
  }

  private min(node: BNode<T>): BNode<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  delete(value: T) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root: BNode<T> | null, value: T): BNode<T> | null {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const successor = this.min(root.right);
      root.value = successor.value;
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bsTree = new BinarySearchTree<number>();
bsTree.insert(10);
bsTree.insert(5);
bsTree.insert(50);
bsTree.insert(20);
bsTree.insert(80);
bsTree.insert(70);
bsTree.insert(100);
bsTree.insert(60);

bsTree.delete(50);
bsTree.preOrder(bsTree.root);
