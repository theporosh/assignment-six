
---
#### Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?



### Answer to the question number 1

i) var : 

Function-scoped: Only accessible within the function where it's declared.

Hoisted: Moves to the top of its scope but is initialized as undefined.

Can be redeclared and reassigned.

ii) let :

Block-scoped: Only accessible within { } block.

Hoisted, but not initialized: accessing before declaration gives a ReferenceError.

Can be reassigned, but not redeclared in the same scope.

iii) const :

Block-scoped.

Must be initialized when declared.

Cannot be reassigned.

Does not mean immutable — if it's an object or array, its contents can change.

### Answer to the question number 2

i) map() :

Creates a new array by applying a function to each element.

Returns a new array, leaving the original untouched.

Can be chained.

ii) forEach() :

Executes a function for each element in the array.

Does not return anything (undefined).

Cannot be chained to transform data.

iii) filter() :

Creates a new array with elements that pass a test

Returns a new array.

Original array remains unchanged.


### Answer to the question number 3

Arrow functions in ES6 are a more easy way to write functions in JavaScript. Use the => (arrow) syntax and behave differently from regular functions. Used for callbacks, array methods, and inline functions.

Basic Syntax :

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (equivalent)
const add = (a, b) => a + b;

Syntax Variations is :

Can be used No parameters example : () => console.log("Hello")
Can be used One parameter example : x => x * 2
Can be used Multiple parameters example : (x, y) => x + y
Can be used Multi-line body : 
(x, y) => {
  const sum = x + y;
  return sum;
}


### Answer to the question number 4

Destructuring assignment in ES6 allows to unpack values from arrays or objects into variables.

Example for Array Destructuring :

const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

Example for Object Destructuring :

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age); // 25


### Answer to the question number 5

Template literals also known as template strings were introduced in ES6 and provide a cleaner, more powerful way to work with strings in JavaScript — especially when it is need for combining variables, expressions, or multi-line text. It has multi-line support, expression support.

Template literals use backticks (`)

Example : const message = `Hello, ${name}!`;

Example for String Concatenation : "Hello, " + name

For Multi line support we have to Use \n and + for String Concatenation 

Example :

const multiline = "This is line one\n" +
                  "This is line two\n" +
                  "This is line three";