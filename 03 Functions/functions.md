# Functions in JavaScript 

Functions are reusable pieces of code that perform a specific task or calculate a value. Think of machine that takes a input, does some operation on it, and then produces output.

example :

  ```
  function greet(name) {
    console.log("Hello, ${name}!");
  }

  greet("Nick"); // "Hello, Nick!"
  greet("Jake"); // "Hello, Jake!"
  ```
In this example, we declared a function named greet and inside function, we have console.log that logs a message.The greet() function takes input name and that name gets logged in message. So we dont need to repeat or write code every time for same operation. 
 
A function uses parameters and arguments as input.

- Parameter act as placeholder for values that passed into function when it called.

- Arguments are the actual values passed to the function when it is called. 

In above example, name serve as the parameter while Nick and Jake serve as the argument.

```
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 7));
```
- Function always return a value after execution, by default it returns undefined. 
- The return keyword is used to specify the value to be returned from the function and ends the function execution. 
- Default parameters allow functions to have predefined values that will be used if an argument is not provided when the function is called. This makes functions more flexible and prevents errors in cases where certain arguments might be omitted.

example: 
```
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // Output: 105
```

- Anonymous functions are functions without a name that can be assigned to variables. By assigning them to variables, you can reuse them anywhere the variable is accessible.

```
const multiplyNumbers = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // Output: 20
```

### Arrow Functions 

Arrow functions are a more concise way to write functions in JavaScript.

```
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
```

- When defining an arrow function, you do not need the function keyword.
- If you are using a single parameter, you can omit the parentheses around the parameter list.

```
const cube = x => {
  return x * x * x;
};

console.log(cube(3)); // Output: 27
```

- If the function body consists of a single expression, you can omit the curly braces and the return keyword.

```
const square = number => number * number;

console.log(square(5)); // Output: 25
```

### Scope in Programming 

- Global scope: This is the outermost scope in JavaScript. Variables declared in the global scope are accessible from anywhere in the code and are called global variables.
- Local scope: This refers to variables declared within a function. These variables are only accessible within the function where they are declared and are called local variables.
- Block scope: A block is a set of statements enclosed in curly braces {} such as in if statements, or loops.
- Block scoping with let and const provides even finer control over variable accessibility, helping to prevent errors and make your code more predictable.


