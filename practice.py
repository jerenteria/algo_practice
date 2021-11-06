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
    return reversed_integer

if __name__ == '__main__':
    print(reverse_integer(12345678))

## anagram(create a new word/phrase using same letters ex. restful => fluster)
def is_anagram(str1, str2):
    # if length of the sgtrings differ - they are nit anagrams
    if len(str1) != len(str2):
        return False
    
    # we have to sort the letters of the strings and then we have to compare
    ## the letters with the same indexes
    ## this is the bottlenect because it has 0(NlogN)
    str1 = sorted(str1)
    str2 = sorted(str2)
    print(str1)
    print(str2)

    ## after that we have to check the letters with the same indexes
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            return False
    
    return True

    ## overall running time is 0(NlogN) + 0(N) =(NlogN)

if __name__ == '__main__':
    s1 = ['f','l','u','s','t','e','r']
    s2 = ['r','e','s','t','f','u','l',]
    print(is_anagram(s1, s2))

## find duplicate in linear time complexity without needing extra memory

def find_duplicates(nums):
    ## iterate through array
    for num in nums:
        ## use absolute value of given number which has to be greater than 0
        if nums[abs(num)] >= 0:
            ## set nums with absolute value num to be equal to -nums with absolute value num
            nums[abs(num)] = -nums[abs(num)]
        else:
            print('Repition found: %s' % str(abs(num)))

if __name__ == '__main__':

    ## THIS METHOD CANNOT HANDLE VALUES SMALLER THAN 0!!!
    ## maximum items has to be smaller than size of the list

    n = [2,6,5,1,4,3,2,5]
    find_duplicates(n)




