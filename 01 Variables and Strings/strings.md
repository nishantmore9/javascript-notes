# Strings in Javascript

In JavaScript, a string is a sequence of characters used to represent text data. Strings are one of the primitive data types in the language, along with numbers, booleans, null, and undefined.

To create a string in JavaScript, you can use single quotes ('), or double quotes (").

**Strings are immutable in programming means once created, we cannot change it directly**

### String concatination 

Process of combining and joinig pieces of text toghther is called string concatenation

**we can perform this using + operator or concat() method.**

- using **+** operator: 

  ```
  let firstnName = 'John';
  let lastName = 'Doe';

  let fullName = firstName + ' ' + lastName;
  console.log(fullName); // John Doe
  ```
-  here we use **+** operator along with " " a space to add space between 2 variables
-  One disadvantage of using the + operator for string concatenation is that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

- using **concat()** method:

  ```
  let str1 = 'Hello';
  let str2 = 'World';

  let result = str1.concat(' ', str2);
  console.log(result); // Hello World
  ```

To conclude, + operator is best for simple concatenation, especially when you need to combine a few strings or variables.

The += operator is useful when building up a string step by step or appending new content to an existing string variable.

Finally, the concat() method is beneficial when you need to concatenate multiple strings together.
