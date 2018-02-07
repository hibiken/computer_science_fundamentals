#! /usr/bin/env python3

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.size = 0

    def length(self):
        return self.size

    def __len__(self):
        return self.size

    def __iter__(self):
        return self.root.__iter__()

    def put(self, key, val):
        if self.root:
            self._put(key, val, self.root)
        else:
            self.root = TreeNode(key, val)
        self.size += 1

    def _put(self, key, val, currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key, val, currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key, val, parent=currentNode)
        else:
            if currentNode.hasRightChild():
                self._put(key, val, currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key, val, parent=currentNode)

    def __setitem__(self, k, v):
        self.put(k, v)

    def get(self, key):
        if self.root:
            res = self._get(key, self.root)
            if res:
                return res.payload
            else:
                return None
        else:
            return None

    def _get(self, key, currentNode):
        if not currentNode:
            return None
        elif currentNode.key == key:
            return currentNode
        elif key < currentNode.key:
            return self._get(key, currentNode.leftChild)
        else:
            return self._get(key, currentNode.rightChild)

    def __getitem__(self, key):
        return self.get(key)

    def __contain__(self, key):
        if self._get(key, self.root):
            return True
        else:
            return False

    def delete(self, key):
        if self.size > 1:
            nodeToRemove = self._get(key, self.root)
            if nodeToRemove:
                self.remove(nodeToRemove)
                self.size -= 1
            else:
                raise KeyError('Error, key not in tree')
        elif self.size == 1 and self.root.key == key:
            self.root = None
            self.size -= 1
        else:
            raise KeyError('Error, key not in the tree')

    def __delitem__(self, key):
        self.delete(key)

    def remove(self, nodeToRemove):
        if nodeToRemove.isLeaf():          # Node to be deleted has no children
            if nodeToRemove == nodeToRemove.parent.leftChild:
                nodeToRemove.parent.leftChild = None
            else:
                nodeToRemove.parent.rightChild = None
        elif nodeToRemove.hasBothChildren(): # Node to be deleted has two children
            succ = nodeToRemove.findSuccessor()
            succ.spliceOut()
            nodeToRemove.key = succ.key
            nodeToRemove.payload = succ.payload
        else:                               # Node to be deleted has one child
            child = nodeToRemove.leftChild if nodeToRemove.hasLeftChild() else nodeToRemove.rightChild
            if nodeToRemove.hasLeftChild():
                if nodeToRemove.isLeftChild():
                    child.parent = nodeToRemove.parent
                    nodeToRemove.parent.leftChild = child
                elif nodeToRemove.isRightChild():
                    child.parent = nodeToRemove.parent
                    nodeToRemove.parent.rightChild = child
                else:
                    nodeToRemove.replaceNodeData(child.key,
                                                 child.payload,
                                                 child.leftChild,
                                                 child.rightChild)


class TreeNode:
    def __init__(self, key, val, left=None, right=None, parent=None):
        self.key = key
        self.payload = val
        self.leftChild = left
        self.rightChild = right
        self.parent = parent

    def __iter__(self):
        if self.hasLeftChild():
            for elem in self.leftChild:
                yield elem
        yield self.key
        if self.hasRightChild():
            for elem in self.rightChild:
                yield elem

    def hasLeftChild(self):
        return self.leftChild

    def hasRightChild(self):
        return self.rightChild

    def isLeftChild(self):
        return self.parent and self.parent.leftChild == self

    def isRightChild(self):
        return self.parent and self.parent.rightChild == self

    def isRoot(self):
        return not self.parent

    def isLeaf(self):
        return not (self.rightChild or self.leftChild)

    def hasAnyChildren(self):
        return self.rightChild or self.leftChild

    def hasBothChildren(self):
        return self.rightChild and self.leftChild

    def replaceNodeData(self, key, value, lc, rc):
        self.key = key
        self.payload = value
        self.leftChild = lc
        self.rightChild = rc
        if self.hasLeftChild():
            self.leftChild.parent = self
        if self.hasRightChild():
            self.rightChild.parent = self

    def findSuccessor(self):
        if self.hasRightChild():
            return self.rightChild.findMin()
        else:
            p = self.parent
            c = self
            while p and p.leftChild != c:
                c = p
                p = p.parent
            return p

    def findMin(self):
        current = self
        while current.hasLeftChild():
            current = current.leftChild
        return current

    def spliceOut(self):
        if self.isLeaf():
            if self.isLeftChild():
                self.parent.leftChild = None
            else:
                self.parent.rightChild = None
        elif self.hasAnyChildren():
            if self.hasLeftChild():
                if self.isLeftChild():
                    self.parent.leftChild = self.leftChild
                else:
                    self.parent.rightChild = self.leftChild
                self.leftChild.parent = self.parent
            else:
                if self.isLeftChild():
                    self.parent.leftChild = self.rightChild
                else:
                    self.parent.rightChild = self.rightChild
                self.rightChild.parent = self.parent

if __name__ == "__main__":
    bst = BinarySearchTree()
    bst.put(23, 'Twenty Three')
    bst.put(43, 'Forty Three')
    print(bst.get(43))
    print(23 in bst)
