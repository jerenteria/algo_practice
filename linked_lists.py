import math

class Node:
    # __init__ is a constructor that allows class to inherit all variables and methods
    def __init__(self, data):
        # store data
        self.data = data
        # pointing to next node or null in beginning
        self.nextNode = None

class LinkedList:
    def __init__(self):
    # reference head node
        self.head = None
        ## node starts at 0
        self.numOfNodes = 0

    def insert_start(self, data):
        # increments number of nodes by 1
        self.numOfNodes = self.numOfNodes + 1
        # instantiate new node
        new_node = Node(data)

        ## check whether its first node in list
        if not self.head:
            self.head = new_node
        else:
            new_node = self.head
            self.head = new_node
    
    # inserting 
    def insert_end(self, data):
        # increment size
        self.numOfNodes = self.numOfNodes + 1
        # create new node
        new_node = Node(data)

        # actual node is pointing to the head node
        actual_node = self.head

        # find last node in linked list
        while actual_node.nextNode is not None:
            actual_node = actual_node.nextNode

            # and insert a new node accordingly
            actual_node.nextNode = new_node
        
    def remove(self, data):
        # if linked list is empty return
        if self.head is None:
            return
        

        actual_node = self.head
        previous_node = None

        # if actual node is not = to data we are looking for
        while actual_node is not None and actual_node.data != data:
            previous_node = actual_node
            actual_node = actual_node.nextNode
        
        # search miss(item is not present in linked list)
        if actual_node is None:
            return

        self.numOfNodes = self.numOfNodes - 1

        # head node is node we want to remove
        if previous_node is None:
            self.head = actual_node.nextNode
            # how we remove given node
        else:
            previous_node.nextNode = actual_node.nextNode
    
    # return number of nodes
    def size_of_list(self):
        return self.numOfNodes

    # traverse linked list(traverse = process every character in a string)
    def traverse(self):
        # first node is head node
        actual_node = self.head
        # if actual node is not at end of list
        while actual_node is not None:
            # print node
            print(actual_node.data)
            actual_node = actual_node.nextNode


linked_list = LinkedList()
linked_list.insert_start(4)
linked_list.insert_start(3)
linked_list.insert_start(7)
linked_list.insert_end(10)

linked_list.traverse()
print('Size: %d' % linked_list.size_of_list())
linked_list.remove(4)
print('Size: %d' % linked_list.size_of_list())
print("---------------")
linked_list.traverse()
