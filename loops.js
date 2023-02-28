// Loops

// For loop
for (let i = 0; i < 10; i++) // i++ is the same as i = i + 1
{
    console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;    // i = i + 1;
}

// Do while loop
let i = 0;
do {
    console.log(i);
    i++;    // i = i + 1;
} while (i < 10);

// forEach loop
let colors = ["red", "blue", "green"];
colors.forEach(function(color) {
    console.log(color);
});  // red, blue, green

// For loop with array
let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}   // red, blue, green
