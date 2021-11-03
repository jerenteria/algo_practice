import math

print("Hello world and Python!")

array = [10, 3, 7, 5]

array[2] = 4

print(array[0:2])
print(array)

## find maximum item
array = [10, 42, 55, 2, 1, 0]
## linear search O(n)

max = array[0]
for num in array:
    if num > max:
        max = num
print(max)

## find min value
array2 = [10, 42, 55, 2, 1, 0]

min = array2[0]
for num in array2: 
    if num < min:
        min = num
print(min)

## reverse an array
array3 = [1,2,3,4,5]

def reverse(nums):
    ## starting at index 0
    start_index = 0
    ## index pointing at last item 
    end_index = len(nums) - 1

    while end_index > start_index:
        ## keep swapping items
        nums[start_index], nums[end_index] = nums[end_index], nums[start_index]
        start_index = start_index + 1
        end_index = end_index -1
        

if __name__ == '__main__':
    n = array3
    reverse(n)
    print(n)


## check if a string is palindrome (reads same forward and backward like radar and madam)
def palindrome_python(string):
    ## compares beginning of string with last letter of string using -1
    ## to see if last letter is same as first letter
    if string == string[:: - 1]:
        return True
    return False

if __name__ == '__main__':
    print(palindrome_python('radar'))


## reverse integers 1234
def reverse_integer(n):
    reversed_integer = 0
    remainder = 0

    while n > 0:
        remainder = n % 10
        reversed_integer = reversed_integer * 10 + remainder
        n = n // 10
    return reverse_integer

if __name__ == '__main__':
    print(reverse_integer(1234))



