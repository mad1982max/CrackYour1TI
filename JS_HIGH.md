# 1. What are primitive data types?

Primitive data types:

- number (integer or floating-point)
  Integers limitation ±(2<sup>53</sup>-1)
- bigint (for integers outside the limits)
- string
- boolean (true,false)
- null
- undefined (unassigned values)
- symbol (unique identifiers)

_Main features_:

- After declare they are stored on a _stack_ and assigned to variables by _value_, not by reference
- All primitives are _immutable_, i.e., they cannot be altered
- _Autoboxing_ (methods and properties)

# 2. What is undefined property?

_“value is not assigned”_
If a variable is declared, but not assigned, then its value is undefined

A function returns undefined if a value was not returned

Falsy value

# 3. What is null value?

_“nothing”, “empty” or “value unknown”_

Language error:

```js
console.log(typeof null); // "object"
```

Falsy value

# 4. What is the difference between null and undefined?

_null_ - “nothing”, “empty” or “value unknown”  
_undefined_ - variable is declared, but value is not assigned

Both are _falsy_ values  
To separate null and undefined from other falsy value we can use _Nullish coalescing operator (??)_

# 5. What is the difference between window and document?

**window** - topmost object in the BOM(Browser Object Model). It represents the window, tab, sometimes iframe and has properties like browser history, location and the device’s screen.

**document** - object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags). It is the root element that represents the html document.

HTML document that gets loaded into a _window_ becomes a _document_ object
_document_ object is property of window object

# 6. What is isNaN?

The isNaN() method returns true if a value is NaN.

Examples

```js
console.log(isNaN(NaN)); // "true"
console.log(NaN === NaN); // false
```

# 7. What is the difference between let, const and var?

|                                 | var                                              | let                                                        | const                                                               |
| ------------------------------- | ------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------- |
| scope                           | functional scope                                 | block                                                      | block                                                               |
| updated/re-declared             | It can be updated and re-declared into the scope | It can be updated but cannot be re-declared into the scope | It cannot be updated (except objects) or re-declared into the scope |
| declared without initialization | YES                                              | YES                                                        | NO                                                                  |
| accessed without initialization | return “undefined”                               | return error                                               | return error                                                        |

# 8. What are the differences between undeclared and undefined variables?

**Undefined** - variable has been declared but it does not have a value.  
**Undeclared** - the variable does not exist in the program at all.

# 9. What are global variables?

Variables declared Globally (outside any function) have Global Scope.
Global variables can be accessed from anywhere in a JS program.

In _non strict_ mode: If we assign a value to a variable that has _not been declared_, it will automatically become a _GLOBAL_ variable.

# 10. What is NaN property?

The Global NaN property is the same as the Number.NaN property. Where _Number_ - object that enables us to represent a numeric value.
NaN is short for "Not-a-Number".
NaN is a number that is not a legal number.

```js
console.log(Number.NaN); // NaN
```

# 11. What are classes in ES6?

Classes - syntaxes sugar in ES6, it is a template for creating objects in future.
_Main features_: prototype-based inheritance, constructors, super calls, instance and static methods

```js
class Employee {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
  static getCompany() {
    return "Epam";
  }
}

class Developer extends Employee {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}
```

# 12. How do you copy properties from one object to other?

```js
const user = {
  name: "Maks"
}

//manually adding key/value through a loop using Object keys or entries
const user1 = ...

//spread operator
const user2 = {...user}

//Object.assign
const user3 = Object.assign({}, user)

//JSON.parse/stringify
const user4 = JSON.parse(JSON.stringify(user))
```

The last is _deep_ copy, but it can't clone methods

# 13. What is Hoisting?

**Hoisting** mechanism where variables and function declarations are moved to the top of their scope before code execution

_var_

```js
console.log(a); // undefined;
var a = "a";
```

_function declaration_

```js
hello(); // 'hello'
function hello() {
  console.log("hello");
}
```

# 14. How do you assign default values to variables?

```js
const a = 100;
const b = a || 1000;
//or
const b = a ?? 1000;
```

# 15. What is the difference between Call, Apply and Bind?

They are all use for calling function with specific context(first parameter) and passing parameters to it

_call_ - all parameters are passed one by one, with coma
_apply_ - all parameters are passed in array
All of them immediately call the function.

_bind_ - all parameters are passed one by one, with coma
This function will execute later
Can be used as a partially applied functions

# 16. What is scope in javascript?

The _scope_ is the current context of execution in which values and expressions are "visible" or can be referenced.
Another words _scope_ is the area where variables are available
If a variable or expression is not in the current scope, it will not be available for use.
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

Types of copes:

_Global_ scope: The default scope for all code running in script mode.
_Module_ scope: The scope for code running in module mode.
_Function_ scope: The scope created with a function.
_Block_ scope: The scope created with a pair of curly braces (a block).

# 17. What is prototype chain?

One of the main features of JS is _prototype inheritance_.
Objects have a special hidden property _[[Prototype]]_ , which is either null or refers to another object.
If we call some method, and it is not in the object, we try to find it in the "parent" object ([[Prototype]] points to it).
If we can't find it again, we repeat the procedure until we get to the top parent.

# 18. What is JSON and its common operations?

JSON - object JS for working with json
JSON.parse(text[, reviver]) - json to JavaScript object
JSON.stringify(value[, replacer[, space]]) - convert a JavaScript object into a string

# 19. How do you parse JSON string?

JSON.parse(text[, reviver])

# 20. What is the purpose JSON stringify?

convert a JavaScript object into a string

# 21. What array methods do you know?

pop, push, shift, unshift, concat, slice, splice, any, every, filter, sort, map, forEach, reduce, fill, find, findIndex, flat, flat, entries

# 22. What is the difference between Array.forEach() and Array.map()?

- forEach(function(element, index, array) { /_ ... _/ }, thisArg) - method executes a provided function once for each array element

- map(function(element, index, array) { /_ ... _/ }, thisArg) - creates a new array populated with the results of calling a provided function on every element in the calling array.

# 23. What are lambda or arrow functions?

It allows you to create functions in a cleaner way compared to regular functions.

```js
let x = (x, y) => x * y;
```

- Arrow function does not have its own **this**. _This_ refers to its parent scope.
- Arrow functions don't have pseudo array **arguments**. We should use _spread_ operator to receive all parameters
