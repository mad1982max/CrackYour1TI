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
