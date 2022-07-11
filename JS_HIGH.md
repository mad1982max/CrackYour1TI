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

_Main feature_: after declare they are stored on a _stack_ and assigned to variables by _value_, not by reference

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

NaN is short for "Not-a-Number"  
NaN is a number that is not a legal number

Examples

```js
console.log("string" * 25); // "NaN"
console.log(typeof NaN); // "number"
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
