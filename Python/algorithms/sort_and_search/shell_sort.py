#! /usr/bin/python

def shellSort(nums):
    gap = len(nums) // 2
    while gap > 0:
        for startIdx in range(gap):
            gapInsertionSort(nums, startIdx, gap)
        print("After increments of size", gap, "The list is", nums)
        gap = gap // 2

def gapInsertionSort(nums, startIdx, gap):
    for i in range(startIdx+gap, len(nums), gap):
        currentValue = nums[i]
        position = i

        while position >= gap and nums[position-gap] > currentValue:
            nums[position] = nums[position-gap]
            position = position-gap

        nums[position] = currentValue


if __name__ == "__main__":
    sample = [34, 1, 45, 21, 18, 3, 52, 39]
    print("Before sorting: ", sample)
    shellSort(sample)
    print("After sorting: ", sample)
