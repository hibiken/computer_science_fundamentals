#! /usr/bin/python
"""
Time: O(N^2) time
Space: O(1) space
In-place
Stable
"""
def bubbleSort(nums):
    isSorted = False
    lastUnsortedIndex = len(nums)-1
    while not isSorted:
        isSorted = True
        for i in range(lastUnsortedIndex):
            if nums[i] > nums[i+1]:
                nums[i], nums[i+1] = nums[i+1], nums[i]
                isSorted = False
        lastUnsortedIndex -= 1


if __name__ == "__main__":
    sample = [3, 1, 4, 5, 10, -4, 2, -5]
    print("Before sorting", sample)
    bubbleSort(sample)
    print("After sorting", sample)
