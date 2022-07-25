# 1. What is a proxy object?

A **Proxy** object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them.

```js
const handler = {
  get(target, prop) {
    // ...
  }
  set(target, prop, val) {
    // ...
  }
}

let proxy = new Proxy(target, handler);
```

# 2. How do you create an object with prototype?

- Object Literal
- Object.create(Object_prototype)
- Constructor (function constructor or class)
- \_proto\_

# 3. What is the difference between proto and prototype?

| Prototype                                                                                                                                 | proto                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| A way to share behavior and data between multiple objects access using _prototype_                                                        | A way to share behavior and data between multiple objects access using _proto_                                                            |
| All the object constructors (function) have prototype properties.                                                                         | All the objects have proto property.                                                                                                      |
| The prototype gives access to the prototype of function using function. Syntax: (function.prototype)                                      | proto gives access to the prototype of the function using the object. Syntax: (object.**proto**)                                          |
| It is mostly used to resolve issues of memory wastage when creating an object in constructor mode then each object has separate behavior. | It is used in the lookup chain to resolve methods, constructors, etc.                                                                     |
| It is the property of the class.                                                                                                          | It is the property of the instance of that class.                                                                                         |
| The prototype property is set to function when it is declared. All the functions have a prototype property.                               | proto property that is set to an object when it is created using a new keyword. All objects behavior newly created have proto properties. |

# 4. How do you define JSON arrays?

A JSON array contains zero, one, or more ordered elements, separated by a comma. The JSON array is surrounded by square brackets [ ].

Data types are allowed for JSON arrays:

- string (" ")
- number
- float
- JSON array (can be nested)
- JSON object
- boolean true or false
- null

# 5. What is tree shaking?

**Tree shaking** is a method of optimising code bundles by eliminating any code from the final file that isn’t actually being used.

# 6. How do you detect a mobile browser?

- navigator.userAgentData.mobile (experimental feature)
- navigator.userAgent.match(myRegexp)

# 7. How do you detect javascript disabled in the page?

```html
<noscript></noscript>
```
