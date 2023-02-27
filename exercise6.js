// 1. Remove the Banana from the array.
// 2. Sort the array in order.
// 3. Put "Kiwi" at the end of the array.
// 4. Remove "Apples" from the array.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
    //["Kiwi", "Oranges", "Blueberries"]

// Using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// 1. Remove the Banana from the array.
array2.shift();
console.log(array2);

// 2. Sort the array in order.
array2.sort();
console.log(array2);

// 3. Put "Kiwi" at the end of the array.
array2.push("Kiwi");
console.log(array2);

// 4. Remove "Apples" from the array.
array2.splice(0, 1);
console.log(array2);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse)
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array2.reverse();
console.log(array2);

// BONUS:
// you should have at the end:
    //["Kiwi", "Oranges", "Blueberries"]
// Using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);