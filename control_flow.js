// Control flow is the order in which the computer executes statements in a script.

// 1. Conditional statements
// 1.1. if statement
// if (condition) {
//     // code to be executed if condition is true
// }
// Example:

var myAge = 25;
if (myAge > 18) {
    console.log("You are an adult!");
}


// 1.2. if...else statement
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }
// Example:

var myAge = 25;
if (myAge > 18) {
    console.log("You are an adult!");
} else {
    console.log("You are not an adult!");
}


// 1.3. if...else if...else statement
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition1 is false and condition2 is true
// } else {
//     // code to be executed if condition1 is false and condition2 is false
// }
// Example:

var myAge = 25;
if (myAge > 18) {
    console.log("You are an adult!");
}
else if (myAge > 12) {
    console.log("You are a teenager!");
} else {
    console.log("You are a child!");
}


// 1.4. switch statement
// switch (expression) {
//     case value1:
//         // code to be executed if expression matches value1
//         break;
//     case value2:
//         // code to be executed if expression matches value2
//         break;
//     default:
//         // code to be executed if expression does not match any of the values
// }
// Example:

var myAge = 25;
switch (myAge) {
    case 18:
        console.log("You are 18!");
        break;
    case 25:
        console.log("You are 25!");
        break;
    default:
        console.log("You are not 18 or 25!");
}


