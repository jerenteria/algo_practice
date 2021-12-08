import math
# find the middle node without extra memory
class Node:
    def __init__(self, data):
        self.data = data
        self.next_node = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.numOfNodes = 0

    ## Find middle node in a linked list, (0)N linear running time
    def get_middle_node(self):
        ## both slow and fast pointers will be the head in the beginning
        fast_pointer = self.head
        slow_pointer = self.head
        ## dont need fast_pointer.next_node "is not None" because it is already
        ## defined in main class Node as self.next_node = None
        while fast_pointer.next_node and fast_pointer.next_node.next_node: ## fast_pointer is pointing at next_node twice as fast
            fast_pointer = fast_pointer.next_node.next_node
            slow_pointer = slow_pointer.next_node

        return slow_pointer

    def insert_start(self, data):
        self.numOfNodes = self.numOfNodes + 1 
        new_node = Node(data)

        if not self.head:
            self.head = new_node
        else:
            new_node = self.head
            self.head = new_node
        

    # traverse linked list(traverse = process every character in a string)
    def traverse(self):
        # first node is head node
        actual_node = self.head
        # if actual node is not at end of list
        while actual_node < node.length:
            


if __name__ =='__main__':
    linked_list = LinkedList()

    linked_list.insert(10)
    linked_list.insert(20)
    linked_list.insert(30)

    print(linked_list.get_middle_node().data())

