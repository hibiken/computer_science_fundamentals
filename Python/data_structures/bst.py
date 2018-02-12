#! /usr/bin/env python

class BSTNode(object):
    def __init__(self, parent, k):
        self.key = k
        self.parent = parent
        self.left = None
        self.right = None

    def find(self, k):
        if k == self.key:
            return self
        elif k < self.key:
            if self.left is None:
                return None
            else:
                return self.left.find(k)
        else:
            if self.right is None:
                return None
            else:
                return self.right.find(k)

    def find_min(self):
        current = self
        while current.left is not None:
            current = current.left
        return current

    def find_max(self):
        current = self
        while current.right is not None:
            current = current.right
        return current

    def successor(self):
        if self.right is not None:
            return self.right.find_min()
        current = self
        while current.parent is not None and current is current.parent.right:
            current = current.parent
        return current.parent

    def predecessor(self):
        if self.left is not None:
            return self.left.find_max()
        current = self
        while current.parent is not None and current is current.parent.left:
            current = current.parent
        return current.parent

    def insert(self, node):
        """
        Inserts a node into the subtree rooted at this node.

        Args:
            node: The node to be inserted.
        """
        if node is None:
            return
        if node.key < self.key:
            if self.left is None:
                node.parent = self
                self.left = node
            else:
                self.left.insert(node)
        else:
            if self.right is None:
                node.parent = self
                self.right = none
            else:
                self.right.insert(node)

    def delete(self):
        """Deletes and returns this node from the BST."""
        if self.left is None or self.right is None:
            if self is self.parent.left:
                self.parent.left = self.left or self.right
                if self.parent.left is not None:
                    self.parent.left.parent = self.parent
            else:
                self.parent.right = self.left or self.right
                if self.parent.right is not None:
                    self.parent.right.parent = self.parent
        else:
            s = self.successor()
            self.key, s.key = s.key, self.key
            return s.delete()

class MinBSTNode(BSTNode):
    """
    A BSTNode which is augmented to keep track of the node with the minimum key
    in the subtree rooted at this node.
    """
    def __init__(self, parent, key):
        super(MinBSTNode, self).__init__(parent, key)
        self.min = self

    def find_min(self):
        """
        Finds the node with the minimum key in the subtree rooted at this node.

        Returns:
            The node with the minimum key.

        Time complexity: O(1)
        """
        return self.min

    def insert(self, node):
        """
        Inserts a node into the subtree rooted at this node.

        Args:
            node: The node to be inserted.
        """
        if node is None:
            return
        if node.key < self.key:
            # Update the min of this node if the inserted node has a smaller key.
            if node.key < self.min.key:
                self.min = node
            if self.left is None:
                node.parent = self
                self.left = node
            else:
                self.left.insert(node)
        else:
            if self.right is None:
                node.parent = self
                self.right = node
            else:
                self.right.insert(node)

    def delete(self):
        """
        Deleted this node itself.

        Returns:
            This node
        """
        if self.left is None or self.right is None:
            if self is self.parent.left:
                self.parent.left = self.left or self.right
                if self.parent.left is not None:
                    self.parent.left.parent = self.parent
                    self.parent.min = self.parent.left.min
                else:
                    self.parent.min = self.parent
                # Propagatese the changes upwords
                c = self.parent
                while c.parent is not None and c is c.parent.left:
                    c.parent.min = c.min
                    c = c.parent
            else:
                self.parent.right = self.left or self.right
                if self.parent.right is not None:
                    self.parent.right.parent = self.parent
            return self
        else:
            s = self.successor()
            self.key, s.key = s.key, self.key
            return s.delete()

class BST(object):
    def __init__(self, klass = BSTNode):
        """
        Creates an empty BST.

        Args:
            klass (optional): The class of the node in the BST.
                              Defaults to BSTNode.
        """
        self.root = None
        self.klass = klass

    def find(self, k):
        """
        Finds and returns the node with key k from the subtree rooted at this node.

        Args:
            k: The key of the node we are searching.

        Returns:
            The node with key k or None if the tree is empty
        """
        return self.root and self.root.find(k)

    def find_min(self):
        """Returns the minimum node of this BST."""
        return self.root and self.root.find_min()

    def find_max(self):
        """Returns the maximum node of this BST."""
        return self.root and self.root.find_max()

    def next_larger(self, k):
        """
        Returns the node that contains the next larger (successor) key in the
        BST in relation to the node with key k.

        Args:
            k: The key of the node of which the successor is to be found.

        Returns:
            The successor node.
        """
        node = self.find(k)
        return node and node.successor()

    def next_smaller(self, k):
        node = self.find(k)
        return node and node.predecessor()

    def insert(self, k):
        """
        Inserts a node with key k into the subtree rooted at this node.

        Args:
            k: The key of the node to be inserted.

        Returns:
            The node inserted.
        """
        node = self.klass(None, k)
        if self.root is None:
            self.root = node
        else:
            self.root.insert(node)
        return node

    def delete(self, k):
        """
        Deletes and returns a node with key k if it exists from the BST.

        Args:
            k: The key of the node that we want to delete.

        Returns:
            The deleted node with key k.
        """
        node = self.find(k)
        if node is None:
            return None
        if node is self.root:
            pseudoroot = self.klass(None, 0)
            pseudoroot.left = self.root
            self.root.parent = pseudoroot
            deleted = self.root.delete()
            self.root = pseudoroot.left
            if self.root is not None:
                self.root.parent = None
            return deleted
        else:
            return node.delete()


class MinBST(BST):
    """
    An augmented BST that keeps track of the node with the minimum key.

    Time complexity of min is O(1).
    """
    def __init__(self):
        super(MinBST, self).__init__(MinBSTNode)
