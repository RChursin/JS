var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    }
];


var userNamePrompt = prompt("What's your username?");  // prompt() is a built-in function
var passwordPrompt = prompt("What's your password?");  // prompt() is a built-in function


function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username &&
            password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}


// Check only the first user in the database
// function signIn(username, password) {
//     if (username === database[0].username &&
//         password === database[0].password) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username and password!");
//     }
// }


signIn(userNamePrompt, passwordPrompt);
