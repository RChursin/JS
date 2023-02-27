// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
    username: "John",
    password: "1234"
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    { username: "John", timeline: "Hello" },
    { username: "Jane", timeline: "Hi" },
    { username: "Bob", timeline: "Hey" }
];

// 4. Prompt the user for their username and password.
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// 5. Check if the username and password they entered is the same as the information in the database.
function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);
