---
title: Search
layout: base
---

# Search algorithms

Implementation of different search algorithms in python.

Sample Array:
```python
x = [3,1,4,5,9,6,2]
```

Goal:

Search 1 specific number. If not in array, return `-1`. If in array return the index of the number.

## Linear Search

Just look through every entry from left to right and check if the entry is equal to the target.

```python
def linear(input, target):
    for idx, entry in enumerate(input):
        if entry == target:
            return idx
    return -1
```

Complexity:  
$O(n)$  
$\Omega(1)$

## Binary Search

Only works with a sorted list!  
Look at the middle of the list first and check if that entry is the target. If it isn't the target, compare that number with the target. If the target is higher, repeat from the first step with the right half of the list, otherwise with the left half.

```python
def binary(input, target, idx = None):
    
    length = len(input)

    if length == 0:
        return -1

    middle = length//2

    if idx == None:
        idx = middle

    if input[middle]==target:
        return idx

    if input[middle]>target:
        return binary(input[:middle], target, idx-((middle//2)+1))
    else:
        return binary(input[middle+1:], target, idx+((middle//2)+1))
```

Complexity:  
$O(\log n)$  
$\Omega(1)$

## Sorting

**Now the question is:**  
Is it better to just do linear search or sort the array and then do binary search. For one search linear search would make more sense. However in practice the same arrays often get searched multiple times. So it is better to sort them once and then do binary search multiple times on the sorted array to save time.   
[Some Sort Algorithms.](/blog/sort.md)
