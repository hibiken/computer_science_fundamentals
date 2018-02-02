#! /usr/bin/python

import math

def mergeSort(nums):
    if len(nums) < 2:
        return nums

    mid = len(nums) // 2
    left = mergeSort(nums[:mid])
    right = mergeSort(nums[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    n = len(left) + len(right)
    left.append(math.inf)
    right.append(math.inf)

    l, r = 0, 0
    for i in range(n):
        if left[l] < right[r]:
            result.append(left[l])
            l += 1
        else:
            result.append(right[r])
            r += 1
    return result

if __name__ == "__main__":
    sample = [12, 5, 34, 6, 10, 11, 4, 2, 48, 32]
    print(mergeSort(sample))
