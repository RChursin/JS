// Objects are a collection of properties.
// Each property has a name and a value.
// The name is a string and the value can be any type of value.
// The value can be a string, number, boolean, function, object, or even another array.

// Objects are created using curly braces {}.
// Each property is written as a name:value pair, separated by commas.
// The name is followed by a colon, then the value.
// The name and value can be any valid JavaScript expression.
// The name and value are separated by a colon.

// Example:
var person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Accessing Object Properties
// You can access object properties in two ways:
// 1. Using dot notation
// 2. Using square brackets

// Example:
// 1. Using dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// 2. Using square brackets
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["city"]);

// Adding New Properties
// You can add new properties to an existing object.
// Example:
person.email = "example@email.com";
// console.log(person);

// Removing Properties
// You can remove properties from an existing object.
// Example:
delete person.email;
// console.log(person);

// Object Methods
// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
// Example:
var person = {
    name: "John",
    age: 25,
    city: "New York",
    fullName: function() {
        return this.name + " " + this.age;
    }
}

// console.log(person.fullName());

// The "this" Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
