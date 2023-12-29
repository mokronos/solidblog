---
title: Sort
layout: base
---

# Sorting algorithms

Implementation of different search algorithms in python.

Sample Array:
```python
x = [3,1,4,5,9,6,2]
```

Goal:

Sort array from lowest to highest entry and return it.

## Selection sort

Go through whole list and find the lowest number. Swap that number with the first number in the list. Start with one position to the right and repeat.

```python
def selection(input):

    for i in range(len(input)):

        min_idx = i
        for j in range(i,len(input)):
            if input[j] < input[min_idx]:
                min_idx = j
        
        input[i], input[min_idx] = input[min_idx], input[i]

    return input
```
Complexity:  
$O(n^2)$  
$\Omega(n^2)$

## Bubble sort

Go through list and check if number is higher than the following number. If yes, swap the two numbers. If no, go to the next number. Repeat from the first step, but end one further position to the left.

```python
def bubble(input):

    for i in range(len(input)):
        for j in range(len(input)-i-1):
            if input[j] > input[j+1]:
                input[j], input[j+1] = input[j+1], input[j]


    return input
```
Complexity:  
$O(n^2)$  
$\Omega(n)$

## Merge sort

Divide list in middle and recursively repeat for left and right. When a list is only 1 number return it. When two of these lists got returned, they are sorted. Then they are combined again, by looking at the first entry in each list and appending the lower number to the result. Repeat until right and left are "empty".

```python
def merge(input):

    if len(input)==1:
        return input

    middle = len(input)//2

    left, right = input[:middle], input[middle:]

    left = merge(left)
    right = merge(right)

    result=[]

    i = j = 0
    while i < len(left) and j < len(right):
        if left[i]<right[j]:
            result.append(left[i])
            i+=1
        else:
            result.append(right[j])
            j+=1
    
    if i < len(left):
        result += left[i:]

    if j < len(right):
        result += right[j:]

    return result
```
Complexity:  
\\(O(n \log n)\\)  
\\(\Omega(n \log n)\\)

## Visualization

[Here.](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
