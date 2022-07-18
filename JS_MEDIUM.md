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
