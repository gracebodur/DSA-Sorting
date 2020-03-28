// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// a) What is the resulting list that will be sorted after 3 recursive calls to mergesort?

[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40] // list of numbers get the length of the list and find the middle

[21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40] // 1st recursive call split the array in 2

[21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40] // 2nd recursive call

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 3rd recursive call 

[21, 1] // resulting list after 3 recursive call

// b) What is the resulting list that will be sorted after 16 recursive calls to mergesort?
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40] // list of numbers get the length of the list and find the middle

[21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40] // 1st split

[21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40] // 2nd split

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 3rd split

[21] [1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40] // 4th split

[21, 1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40] // 5th /1st merge

[21, 1] [26, 45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40] // 6th /2nd merge

[21, 1] [26, 45] [29, 28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40] // 7th /3rd merge

[21, 1] [26, 45] [29, 28] [2, 9] [16] [49] [39] [27] [43] [34] [46] [40] // 8th /4th merge

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39] [27] [43] [34] [46] [40] // 9th / 5th merge

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43] [34] [46] [40] // 10th / 6th merge

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46] [40] // 11th / 7th merge

[21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 12th / 8th merge

[1, 21] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 13th / sort 1st list

[1, 21] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 14th / sort 2nd list

[1, 21, 26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 15th / merge  first 2 list

[1, 21, 26, 45] [28, 29] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40] // 16th / sort 2nd list

[1, 21, 26, 45] // resulting list after 16 recursive call

// c) What are the first 2 lists to be merged?
[21] [1]
// d) Which two lists would be merged on the 7th merge?
[43] [34] 
