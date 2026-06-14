## Variables in Javascript

There are three kinds of variable in javascript : var, let and const.

- var : var is a keyword to declare a variable in javascript and it is function scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

- let : let is a keyword to  declare a variable and it is blocked scoped and not hoisted to the top.

- const : const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can't be reassigned, though objects can still be mutated.

### Rules for naming Variables 

- Variable names must begin with a letter, underscore (_), or dollar sign ($).
- Subsequent characters can be letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive (e.g., age and Age are different variables).
- Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

### Difference between let, const and var

The primary differences between var, let, and const come down to scope, re-declaration/re-assignment, and hoisting behaviors.

1. **var** : 
    - var is functioned scoped or globally-scoped. If it is declared outside of a function, it is available globally.

    - Variables with var can be redeclared and reassign within the scope without getting an error.

    - Variables declares with var are hoisted on top of scope before execution and are initialized with a value of undefined.

    - Example : 

    ```
    var fruit = "apple";
    var fruit = "banana"; // Redeclaration is allowed
    fruit = "orange"; // Re-assignment is allowed

    if (true) {
        var fruit = "grape"; // This modifies the outer 'fruit' variable
    }
    console.log(fruit); // Output: "grape" (because var is not block-scoped)
    ```
2. **let** : 
    - let is blocked-scoped, meaning it only exists within the block of '{}' in which it was defined.

    - we can reassign a new value to a let variable, but cannot redeclare it within the exact same scope.

    - let is hoisted on top of block, it is not initialized. Accessing i before declaration results in a ReferenceError. 

    - Example: 

    ```
    let color = "red";
    // let color = "blue"; // This would throw a SyntaxError: Identifier 'color' has already been declared
    color = "green"; // Re-assignment is perfectly fine

    if (true) {
        let color = "purple"; // This is allowed because it is in a new block scope
        console.log(color); // Output: "purple"
    }
    console.log(color); // Output: "green" (the outer variable remains unchanged)
    ```
3. **const** : 
    - const is blocked-scoped like let.
    - variabled with const cannot be redeclared and cannot reassign a value. It must be initialized with a value at the exact time it is declared.
    - Like let, it is hoisted but not initialized, resulting TDZ(Temporal Dead Zone).
    - Note on Mutability: While you cannot reassign a const identifier, if the constant holds an object or an array, you can still mutate its properties or contents.

    - Example : 
    ```
    const maxUsers = 100;
    // maxUsers = 150; // This throws a TypeError: Assignment to constant variable.
    // const maxUsers = 200; // Throws a SyntaxError

    // Mutating a const object is allowed:
    const user = { name: "Alice" };
    user.name = "Bob"; // This works fine!
    console.log(user.name); // Output: "Bob"
    ```

    [For more](https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/)

