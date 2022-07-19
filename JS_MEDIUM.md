# 1. What are the possible ways to create objects in JavaScript?

- literal syntax

```js
const obj = {
  name: "maks",
};
```

- the ‘new’ keyword:

  - Using the ‘new’ keyword with’ in-built Object constructor function
  - Using ‘new’ with user defined constructor function

- Using Object.create()
- Using Object.assign()
- ES6 classes

# 2. What are the problems with global variables?

| Conflicts                                                                                                                                                                                           | Performance                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global variables are in danger of being overridden by your own code as your code base grows, or by any framework or plugin you may use. This can easily introduce bugs that are hard to track down. | When your code reference a variable it is faster for the script engine to search a limited scope instead of traversing any parent scopes, ultimately ending up searching the entire global scope. |

# 3. How do you check whether a string contains a substring?

- indexOf (string.indexOf(substring))
- includes (string.includes(substring))
- Regexp:
  - RegExp.test()
  - string.match(/substring/);
  - str.search(/substring/)

# 4. How do you check if a key exists in an object?

- **"key" in obj**
- **obj.hasOwnProperty("key")**

# 5. What is the main difference between Object.values and Object.entries method?

```js
const object = {
  name: "Maks",
  city: "Kharkiv",
};
```

- **Object.values**

```js
console.log(Object.values(object));
// expected output: Array ["Maks", "Kharkiv"]
```

- **Object.entries**

```js
console.log(Object.entries(object));
// expected output: Array [["name","Maks"], ["city", "Kharkiv"]]
```

# 6. How can you get the list of keys of any object?

- _Object.keys(object)_
- _for in_ and push to array

# 7. What is a WeakSet?

**WeakSet** is a collection of objects that are unique from each other but differs because WeakSet can only store objects and cannot contain arbitrary values of any type like strings or numbers.

Ultimately, as the name suggests, WeakSets are indeed weak, meaning they use _weak references_.

There is _no way to loop over_ the items contained within it because there is no list of current objects stored in the collection; they are weakly referenced and may be removed at any point.

```js
const pets = new WeakSet();
let cat = { name: "cat" };

pets.add(cat);
cat = null;

console.log(pets.has(cat)); //false
```

# 8. What are the differences between WeakSet and Set?

| Sets                                                         | WeakSets                |
| ------------------------------------------------------------ | ----------------------- |
| a collections of values                                      | a collection of objects |
| a value in the Set may only occur once                       | objects that are unique |
| can iterate through the elements of a set in insertion order | is not enumerable       |
| strong references                                            | weak references         |

# 9. What is a WeakMap?

**WeakMap** holds key-value pairs with _objects_ as the keys, but the values can be any arbitrary value like a string or number. Key is the references it holds are _weak references_, meaning it won’t prevent garbage collection from removing values it references if they are not strongly referenced elsewhere.

Also, WeakMap has the same side effect of _not being enumerable_ due to the weak references.

```js
const wm = new WeakMap();
const obj = { name: 1254 };

wm.set(obj, "city");
wm.set(obj2, "Hello");

wm.get(obj); // 'city'

wm.has(obj); // true
wm.delete(obj);
wm.has(obj); // false
```

# 10. What are the differences between WeakMap and Map?

| Maps                                                                             | WeakMap              |
| -------------------------------------------------------------------------------- | -------------------- |
| Any value as a key                                                               | only object as a key |
| A Map object iterates entries, keys, and values in the order of entry insertion. | is not enumerable    |
| strong references                                                                | weak references      |

# 11. Why do you need JSON?

**JSON** (JavaScript Object Notation)

- is a text format
- data can easily be sent between computers
- JSON can be used by any programming language.

# 12. What is the purpose of the array slice method?

**The slice() method** returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

**Syntax**

- slice()
- slice(start)
- slice(start, end)

# 13. What is the purpose of the array splice method?

**The splice() method** changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

**Syntax**

- splice(start)
- splice(start, deleteCount)
- splice(start, deleteCount, item1)
- splice(start, deleteCount, item1, item2, itemN)

# 14. What is a first class function?

A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

# 15. What is a higher order function?

**Higher-Order Function**: A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.

# 16. What is a unary function?

A unary function is a function that takes one argument.

# 17. What is the currying function?

**Currying** is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

# 18. What is an anonymous function?

- Anonymous functions are functions without names.
- Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

# 19. What is promise.all?

The **Promise.all()** method is actually a method of Promise object, that takes an _array of promises_(an iterable) as an input. It returns a _single Promise_ that resolves when _all_ of the promises passed as an iterable, which have resolved or when the iterable contains no promises.

If any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that already rejected, whether or not the other promises have resolved.

# 20. What is the purpose of race method in promise?

The **Promise.race()** method returns a promise that fulfills or rejects as soon as one of the promises in an iterable array is fulfilled or rejected. This array of promises is passed as an argument to the method.

# 21. What is a strict mode in javascript?

**'use strict'** syntax shows that the code should be executed in 'strict mode'.

_Some features_:

- Undeclared variable is not allowed.
- Undeclared objects are not allowed.
- Deleting an object is not allowed.
- Duplicating a parameter name is not allowed.
- Assigning to a non-writable property is not allowed.
- Assigning to a getter-only property is not allowed.
- Assigning to a new property on a non-extensible object is not allowed.
- Octal syntax is not allowed.
- The variable name arguments and eval (reserved words) are not allowed.

_Benefits_ of Strict Mode:

- helps to write a cleaner code
- changes previously accepted silent errors (bad syntax) into real errors and throws an error message
- makes it easier to write "secure" JavaScript

# 22. What are PWAs?

_Progressive Web Application (PWA)_ is a type of web app that can operate both as a web page and mobile app on any device

| Characteristic      | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| Discoverable        | The app is discoverable from web search results and supporting app stores |
| Installable         | Pin and launch the app from the home screen, Start menu, and Taskbar      |
| Re-engageable       | The app can receive push notifications, even when the app isn't active    |
| Network-independent | The app works offline and in low-network conditions                       |
| Progressive         | The user experience of the app scales up or down with device capabilities |
| Safe                | The app provides a secure HTTPS endpoint and other user safeguards        |
| Responsive          | The app adapts to the user's screen size or orientation and input method  |
| Linkable            | Share and launch the app from a standard link                             |

# 23 How do you get the current url with javascript?

**window.location.href**

# 24 What is memoization?

**memoization** is an optimization technique:

- store computation results in cache
- retrieving that same information from the cache the next time it's needed instead of computing it again

# 25 How do you encode an URL?

Allows you to safety transfer data in the URL

_encodeURIComponent()_

# 26 How do you decode an URL?

_decodeURIComponent()_

# 27 What is a first order function?

??????
