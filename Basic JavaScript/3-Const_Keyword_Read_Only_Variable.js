// The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
// They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

// A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

// Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. 
// Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 