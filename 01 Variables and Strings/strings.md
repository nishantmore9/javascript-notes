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

### Template Literals (Template Strings) and String Interpolation

- Definition: Template literals are defined with backticks (`). They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.

```
const name = "Jessica";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Jessica!"
```
### ASCII, the charCodeAt() Method and the fromCharCode() Method
- ASCII: ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent basic English characters using numeric values. Earlier lessons introduce charCodeAt() and fromCharCode() using ASCII examples.
- Unicode: JavaScript strings use Unicode internally, specifically UTF-16 encoding. For the first 128 characters (basic Latin letters, digits, and common symbols), the Unicode values match ASCII codes. This is why ASCII-based examples continue to work in JavaScript.
- The charCodeAt() Method: This method returns the UTF-16 code unit of the character at a specified index. For basic Latin characters, this value matches the ASCII code.

```
const letter = "A";
console.log(letter.charCodeAt(0));  // 65
```
- The fromCharCode() Method: This method converts an ASCII code into its corresponding character.

```
const char = String.fromCharCode(65);
console.log(char);  // A
```
### Other Common String Methods

The indexOf Method: This method is used to search for a substring within a string. If the substring is found, indexOf returns the index (or position) of the first occurrence of that substring. If the substring is not found, indexOf returns -1, which indicates that the search was unsuccessful.

```
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

The includes() Method: This method is used to check if a string contains a specific substring. If the substring is found within the string, the method returns true. Otherwise, it returns false.

```
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

The slice() Method: This method extracts a portion of a string and returns a new string, without modifying the original string. It takes two parameters: the starting index and the optional ending index.

```
const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // "free"
console.log(text.slice(4, 8));  // "Code"
console.log(text.slice(8, 12)); // "Camp"
```

The toUpperCase() Method: This method converts all the characters to uppercase letters and returns a new string with all uppercase characters.

```
const text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
```

The toLowerCase() Method: This method converts all characters in a string to lowercase.

```
const text = "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
```

The replace() Method: This method allows you to find a specified value (like a word or character) in a string and replace it with another value. The method returns a new string with the replacement and leaves the original unchanged because JavaScript strings are immutable.

```
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"
```

The replaceAll() Method: This method allows you to find all occurrences of a specified value (a word, character, or pattern) in a string and replace them with another value. It works like replace(), but instead of stopping after the first match, it updates every match found in the string.

```
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs")); // "I love dogs and dogs are so much fun!"
```

The repeat() Method: This method is used to repeat a string a specified number of times.

```
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
```

The trim() Method: This method is used to remove whitespaces from both the beginning and the end of a string.

```
const text = "  Hello, world!  ";
console.log(text.trim()); // "Hello, world!"
```

The trimStart() Method: This method removes whitespaces from the beginning (or "start") of the string.

```
const text = "  Hello, world!  ";
console.log(text.trimStart()); // "Hello, world!  "
```

The trimEnd() Method: This method removes whitespaces from the end of the string.

```
const text = " Hello, world! ";
console.log(text.trimEnd()); // "  Hello, world!"
```

The prompt() Method: This method of the window is used to get information from a user through the form of a dialog box. This method takes two arguments. The first argument is the message which will appear inside the dialog box, typically prompting the user to enter information. The second one is a default value which is optional and will fill the input field initially.

```
const answer = window.prompt("What's your favorite animal?"); // This will change 
```