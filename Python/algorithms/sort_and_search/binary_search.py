# Running time: O(logN) time

# Iterative version.
def binarySearch(alist, item):
    low = 0
    high = len(alist)-1
    found = False

    while low <= high and not found:
        mid = (first + last) // 2
        if alist[midpoint] == item:
            found = True
        else:
            if item < alist[midpoint]:
                last = mid-1
            else:
                first = mid+1

    return found

# Recursive version.
def binarySearchRecursive(alist, item):
    if len(alist) == 0:
        return False
    else:
        mid = len(alist) // 2
        if alist[mid] == item:
            return True
        else:
            if item < alist[mid]:
                return binarySearchRecursive(alist[:mid], item)
            else:
                return binarySearchRecursive(alist[mid+1:], item)

def binarysearch(alist, item, start, end):
    if start > end:
        return False
    else:
        mid = (start+end) // 2
        if alist[mid] == item:
            return True
        else:
            if item < alist[mid]:
                return binarysearch(alist, item, start, mid-1)
            else:
                return binarysearch(alist, item, mid+1, end)
