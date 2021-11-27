class Node:

    def __init__(self, data):
        self.data = data
        self.next = None
        self.previous = None

class DoubleLinkedList:
    
    def __init__(self):
        self.head = None
        self.tail = None

    # this inserts items at end of linked list
    # so we have to manipulate the tail node in O(1) running time
    def insert(self, data):

        new_node = Node(data)
        # when list is empty
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        # when we know that there is at least one item in data structure
        # keep inserting items at end of linked list
        else:
            # previous node is now considered the tail node
            new_node.previous = self.tail
            # the next node is now considered the new node
            self.tail.next = new_node
            self.tail = new_node

        # we can traverse(loop through) doubly linked lists in both directions
    def traverse_forward(self):
        # start with head node
        actual_node = self.head

        while actual_node is not None:
            # print data of actual node
            print("%d" % actual_node.data)
            # update actual node to be actual node next node
            actual_node = actual_node.next

    def traverse_backward(self):
        # start with head node
        actual_node = self.tail

        while actual_node is not None:
            # print data of actual node
            print("%d" % actual_node.data)
            # update actual node to be actual node next node
            actual_node = actual_node.previous

if __name__ == '__main__':

    linked_list = DoubleLinkedList()
    linked_list.insert(1)
    linked_list.insert(2)
    linked_list.insert(3)

    linked_list.traverse_forward()


