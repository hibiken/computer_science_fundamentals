class MaxHeap(object):
    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0

    def insert(self, k):
        self.heapList.append(k)
        self.currentSize += 1
        self.heapifyUp(self.currentSize)

    def heapifyUp(self, i):
        while i // 2 > 0:
            if self.heapList[i] > self.heapList[i // 2]:
                temp = self.heapList[i // 2]
                self.heapList[i // 2] = self.heapList[i]
                self.heapList[i] = temp
            i = i // 2

    def extractMax(self):
        retval = self.heapList[1]
        self.heapList[1] = self.heapList[self.currentSize]
        self.currentSize -= 1
        self.heapList.pop()
        self.heapifyDown(1)
        return retval

    def heapifyDown(self, i):
        while (i * 2) <= self.currentSize:
            mc = self.maxChild(i)
            if self.heapList[i] < self.heapList[mc]:
                temp = self.heapList[i]
                self.heapList[i] = self.heapList[mc]
                self.heapList[mc] = temp
            i = mc

    def maxChild(self, i):
        if i * 2 + 1 > self.currentSize:
            return i * 2
        else:
            if self.heapList[i*2] > self.heapList[i*2+1]:
                return i * 2
            else:
                return i * 2 + 1

    def buildHeap(self, keys):
        i = len(keys) // 2
        self.currentSize = len(keys)
        self.heapList = [0] + keys[:]
        while i > 0:
            self.heapifyDown(i)
            i -= 1

    def isEmpty(self):
        return self.currentSize == 0


if __name__ == "__main__":
    sample = [32, 4, 24, 56, 21, 10, 9, 67, 20, 18, 1, 0]
    heap = MaxHeap()
    heap.buildHeap(sample)
    ordered = []
    while not heap.isEmpty():
        ordered.append(heap.extractMax())
    print(ordered)
