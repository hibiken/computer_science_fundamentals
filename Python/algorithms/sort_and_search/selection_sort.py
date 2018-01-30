#! /usr/bin/python
"""
Time: O(N^2) time
Space: O(1) space
In-place
Stable
"""
def selectionSort(nums):
    for i in range(len(nums)):
        minNumIdx = i
        for j in range(i, len(nums)):
            if nums[j] < nums[minNumIdx]:
                minNumIdx = j
        nums[i], nums[minNumIdx] = nums[minNumIdx], nums[i]


if __name__ == "__main__":
    sample = [3, 1, 4, 5, 10, -4, 2, -5]
    print("Before sorting: ", sample)
    selectionSort(sample)
    print("After sorting: ", sample)
