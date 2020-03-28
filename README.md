### DSA-Sorting

#### Sorting
- The process of reaaranging the items in a collection (e.g. an array) so that the items are in some kind of order.
  
Examples:

  - Sorting numbers from smallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year
  - Sorting movies based on revenue

#### Telling JavaScript how to sort
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
- If it returns a negative number, a should come before b
- If it returns a positive number, a should come after b,
- If it returns 0, a and b are the same as far as the sort is concerned

Examples:
```
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```
```
function compareByLen(str1, str2) {
  return str2.length -str1.length;
}

["Bodur", "Grace", "Data Structures", "Algorithms"]
  
.sort(compareByLen);
// ["Data Structures", "Algorithms", "Bodur", "Grace"]
```
#### Elementary Sorting Algorithms
##### Bubble Sort
- A sorting algorithm where the largest values bubble up to the top!

#### Intermediate Sorting Algorithms
##### Merge Sort
- It's a combination of three things - splitting, merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements(divide and conquer approach), then building up a newly sorted array

#### Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

References:

[Visualgo-Sorting](https://visualgo.net/bn/sorting)

[Big-O Algorithm Complexity Cheat Sheet](https://www.bigocheatsheet.com/)

[Elementary Sorting Algorithms slides - Colt Steele](https://cs.slides.com/colt_steele/elementary-sorting-algorithms#/2)