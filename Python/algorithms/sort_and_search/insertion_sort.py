#! /usr/bin/python
"""
Time: O(N^2) time
Space: O(1) space
In-place
Stable
"""
def insertionSort(nums):
    for i in range(1, len(nums)):
        j = i
        while j > 0 and nums[j-1] > nums[j]:
            nums[j-1], nums[j] = nums[j], nums[j-1]
            j -= 1

if __name__ == "__main__":
    sample = [3, 1, 4, 5, 10, -4, 2, -5]
    print("Before sorting", sample)
    insertionSort(sample)
    print("After sorting", sample)
