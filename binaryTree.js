// Step 1 定义二叉树类
class BinaryTreeNode {
  _data = '';
  _child = null;
  constructor(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  getChild() {
    return this._child;
  }
  getLeftChild() {
    if (this._child) {
      return this._child[0];
    }
    return null;
  }
  getRightChild() {
    if (this._child) {
      return this._child[1];
    }
    return null;
  }
  setLeftChild(node) {
    this._init();
    this._child[0] = node;
  }
  setRightChild(node) {
    this._init();
    this._child[1] = node;
  }
  _init() {
    if (!this._child) {
      this._child = [];
    }
  }
}

// Step 2 初始化
// A ⊇ (B, C)
// B ⊇ (D, E)
// C ⊇ (F, G)
const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');
const nodeF = new BinaryTreeNode('F');
const nodeG = new BinaryTreeNode('G');

nodeA.setLeftChild(nodeB);
nodeA.setRightChild(nodeC);

nodeB.setLeftChild(nodeD);
nodeB.setRightChild(nodeE);

nodeC.setLeftChild(nodeF);
nodeC.setRightChild(nodeG);

// Step 3 遍历二叉树

// 先序遍历
// preOrderSearch(nodeA);
function preOrderSearch(treeNode) {
  if (!treeNode) {
    return;
  }
  console.log(treeNode.getData());
  preOrderSearch(treeNode.getLeftChild());
  preOrderSearch(treeNode.getRightChild());
}
//=> ABDECFG

// 中序遍历
// inOrderSearch(nodeA);
function inOrderSearch(treeNode) {
  if (!treeNode) {
    return;
  }
  inOrderSearch(treeNode.getLeftChild());
  console.log(treeNode.getData());
  inOrderSearch(treeNode.getRightChild());
}
//=> DBEAFCG

// 后序遍历
// postOrderSearch(nodeA);
function postOrderSearch(treeNode) {
  if (!treeNode) {
    return;
  }
  postOrderSearch(treeNode.getLeftChild());
  postOrderSearch(treeNode.getRightChild());
  console.log(treeNode.getData());
}
//=> DEBFGCA

// 层序遍历
levelOrderSearch(nodeA);
function levelOrderSearch(treeNode) {
  const queue = [treeNode];
  for (const node of queue) {
    console.log(node.getData());
    if (node.getChild()) {
      queue.push(...node.getChild());
    }
  }
}
//=> ABCDEFG
