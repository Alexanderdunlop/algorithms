# Binary Search

## Problem

Assume we have a bunch of boxes they could be any numbers but assume they are sorted in ascending order. We are looking for a specific number in these boxes.

## Solution

We divide and conquer. We start by looking at the middle box. If the number we are looking for is less than the number in the middle box, we can eliminate the right half of the boxes. If the number we are looking for is greater than the number in the middle box, we can eliminate the left half of the boxes. We continue this process until we find the number we are looking for or we have eliminated all the boxes.

## Complexity

The time complexity of binary search is O(log n) where n is the number of boxes. The space complexity is O(1) because we are not using any additional space.
