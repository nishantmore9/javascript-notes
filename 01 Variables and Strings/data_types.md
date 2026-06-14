# DataTypes in Javascript 

Data types help the program understand the kind of data it's working with, whether it's a number, text, or something else. 

- Number: A number represents both integers and floating-point values. Examples of integers include 7, 19, and 90.

- Floating point: A floating point number is a number with a decimal point. Examples include 3.14, 0.5, and 0.0001.

- String: A string is a sequence of characters, or text, enclosed in quotes. "I like coding" and 'JavaScript is fun' are examples of strings.

- Boolean: A boolean represents one of two possible values: true or false. You can use a boolean to represent a condition, such as isLoggedIn = true.

- Undefined and Null: An undefined value is a variable that has been declared but not assigned a value. A null value is an empty value, or a variable that has intentionally been assigned a value of null.

- Object: An object is a collection of key-value pairs. The key is the property name, and the value is the property value.

  Here, the pet object has three properties or keys: name, age, and type. The values are Fluffy, 3, and dog, respectively.

  ```
  let pet = {
    name: "Fluffy",
    age: 3,
    type: "dog"
  };
  ```
- Symbol: The Symbol data type is a unique and immutable value that may be used as an identifier for object properties.

  Example : 
  ```
  const crypticKey1= Symbol("saltNpepper");
  const crypticKey2= Symbol("saltNpepper");
  console.log(crypticKey1 === crypticKey2); // false
  ```
- BigInt: When the number is too large for the Number data type, you can use the BigInt data type to represent integers of arbitrary length. By adding an n to the end of the number, you can create a BigInt.
 
  ```
  const veryBigNumber = 1234567890123456789012345678901234567890n;
  ```
  