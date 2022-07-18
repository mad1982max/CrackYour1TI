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

**Object.keys(object)**

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
