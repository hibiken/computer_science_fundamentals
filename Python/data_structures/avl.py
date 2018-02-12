#! /usr/bin/env python

import bst

def height(node):
    if node is None:
        return -1
    else:
        return node.height

def update_height(node):
    node.height = max(height(node.left), height(node.right)) + 1

class AVL(bst.BST):
    """
    AVL binary search tree implementation.
    Supports insert, delete, find, find_min, next_larger each in
    O(lgN) time.
    """
    def left_rotate(self, x):
        """Time complexity: O(1)"""
        y = x.right
        y.parent = x.parent
        if y.parent is None:
            self.root = y
        else:
            if y.parent.left is x:
                y.parent.left = y
            else:
                y.parent.right = y
        x.right = y.left
        if x.right is not None:
            x.right.parent = x
        y.left = x
        x.parent = y
        update_height(x) # order of update_height matters here!
        update_height(y)

    def right_rotate(self, x):
        """Time complexity: O(1)"""
        y = x.left
        y.parent = x.parent
        if y.parent is None:
            self.root = y
        else:
            if y.parent.left is x:
                y.parent.left = y
            else:
                y.parent.right = y
        x.left = y.right
        if x.left is not None:
            x.left.parent = x
        y.right = x
        x.parent = y
        update_height(x)
        update_height(y)

    def rebalance(self, node):
        while node is not None:
            update_height(node)
            if height(node.left) - height(node.right) > 1:
                if height(node.left.left) >= height(node.left.right):
                    self.right_rotate(node)
                else:
                    self.left_rotate(node.left)
                    self.right_rotate(node)
            elif height(node.right) - height(node.left) > 1:
                if height(node.right.right) >= height(node.right.left):
                    self.left_rotate(node)
                else:
                    self.right_rotate(right)
                    self.left_rotate(node)
            node = node.parent

    def insert(self, k):
        """
        Inserts a node with key k into the subtree rooted at this node.
        Maintains balanced search tree property.

        Args:
            k: the key of the node to be inserted.
        """
        node = super(AVL, self).insert(k)
        self.rebalance(node)

    def delete(self, k):
        """
        Deletes and returns a node with key k if it exists.
        Maintains balanced search tree property.

        Args:
            k: The key of the node that we want to delete.

        Returns:
            The deleted node with key k.
        """
        node = super(AVL, self).delete(k)
        # node.parent is actually the old parent of the node,
        # which is the first potentially out-of-balance node.
        self.rebalance(node.parent)
