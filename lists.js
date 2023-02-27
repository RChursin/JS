// List or Array is a collection of elements of same type or different type of elements in a single variable.
// Uncomment console.log() statements to see the output.

var list = ["one", "two", "three", "four", "five"];

// Accessing list elements
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);

// Array length
// console.log(list.length);

// Adding elements to the end of the list
list.push("six");
// console.log(list);

// Removing elements from the end of the list
list.pop();
// console.log(list);

// Concatenating two lists
var list2 = ["seven", "eight", "nine", "ten"];
var list3 = list.concat(list2);
// console.log(list3);

// Adding elements to the beginning of the list
list.unshift("zero");
// console.log(list);

// Removing elements from the beginning of the list
list.shift();
// console.log(list);

// Removing elements from the middle of the list
list.splice(2, 1);
// console.log(list);

// Adding elements to the middle of the list
list.splice(2, 0, "three");
// console.log(list);

// Reversing the list
list.reverse();
// console.log(list);

// Sorting the list
list.sort();
// console.log(list);

// Sorting the list in descending order
list.sort(function(a, b) {
    return b - a;
});
// console.log(list);

// Sorting the list in ascending order
list.sort(function(a, b) {
    return a - b;
});
// console.log(list);
