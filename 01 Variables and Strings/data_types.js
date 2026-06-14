// Primitive Data Types in JavaScript

// Number 
let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

// String
let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);

// Boolean
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

// Null
let age = null;
console.log(age)

// Undefined
let a;
console.log(a);

// Symbol
const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false

// BigInt 
let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1);

// Non Primitive Data Types in JavaScript

// Object
let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

// Array
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

// Function
// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));
