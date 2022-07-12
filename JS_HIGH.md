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

# 24. What is a pure function?

The same input parameters will give the same output regardless of how many times you run the function.
Pure functions do not have side effects.
Debugging pure functions is relatively easier than debugging impure functions.

# 25. What are closures?

A _closure_ gives us access to an outer function's scope from an inner function

```js
const counter = () => {
  let counter = 0;
  return {
    add: (increment = 1) => {
      counter += increment;
    },
    get status() {
      return counter;
    },
  };
};

const firstCounter = counter();
firstCounter.add();
console.log(firstCounter.status); // 1

const secondCounter = counter();
secondCounter.add(10);
console.log(secondCounter.status); // 10
```

Every closure has three scopes:

- Local scope (Own scope)
- Enclosing scope (can be block, function, or module scope)
- Global scope

In the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a _chain of function scopes_.

# 26. What is IIFE(Immediately Invoked Function Expression)?

IIFE is a way to execute functions _immediately_, as soon as they are created.

IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations
IIFEs starting with a _semicolon_ - This prevents issues when blindly concatenating two JavaScript files

# 27. What is a callback function?

_Callback_ is a function that are passed to another functions as parameter and are called inside the outer functions.  
Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
Used in asynchronous programming.

# 28. What is a promise?

Promise is a proxy for a value that will eventually become available.
Helps to avoid _callback hell_.

Once a promise has been called, it will start in a pending state.
This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

The created promise will eventually end in a resolved state, or in a rejected state, calling the respective callback functions (passed to then and catch) upon finishing.

A promise can be returned to another promise, creating a chain of promises.

When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest catch() statement down the chain.

```js
const promise = new Promise((resolve, reject) => {
  resolve("some data");
});

promise
  .then((data) => console.log(data)) //'some data'
  .catch((err) => console.log(err))
  .finally(() => console.log("some text")); // 'some text'
```

# 29. Why do you need a promise?

To avoid _callback hell_ : callback nesting

# 30. What are the states of promise?

A Promise has _four_ states:

- _fulfilled_: Action related to the promise succeeded.
- _settled_: Promise has fulfilled or rejected.
  - _rejected_: Action related to the promise failed.
  - _pending_: Promise is still pending i.e. not fulfilled or rejected yet.

# 31. Why do we need callbacks?

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
Used in asynchronous programming.

# 32. What is a callback hell?

"callback nesting" or "callback in callback"

# 33. What is promise chaining?

A promise can be returned to another promise, creating a chain of promises.

# 34. What is the use of setTimeout?

The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

The returned intervalID is a numeric, non-zero value which identifies the timer

Syntax:
setTimeout(someFunction, delay, param1, param2, /_ ... ,_/ paramN)

# 35. What is the use of setInterval?

The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.  
The returned intervalID is a numeric, non-zero value which identifies the timer.

Syntax:
setInterval(func, delay, arg0, arg1, /_ ... ,_/ argN)

# 36. What is an event loop?

There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.
The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue.
If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.

# 37. What is call stack?

Call stack is a LIFO (last in first out) data structure. All of the function calls are pushed into this call stack.

# 38. How do you validate an email in javascript?

add OnChange to input
or
validate after user push submit on form

with RegExp

```js
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

or

```js
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```

# 39. What are modules?

Module is a file that contains code to perform a specific task.  
A module may contain variables, functions, classes etc.

# 40. Why do you need modules?

Encapsulation, Readability, Maintainability, Split logic

# 41. What is a rest parameter?

The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array

# 42. What is a spread operator?

The spread operator (...) helps you expand iterables into individual elements.

# 43. What is nodejs?

Node.js is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.
