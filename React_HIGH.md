# 1. What is React?

React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.  
React can be used as a base in the development of single-page, mobile, or server-rendered applications.

# 2. What are the major features of React?

- JSX (JavaScript Syntax Extension)
- Virtual DOM
- One-way data binding
- Performance
- Extensions
- Conditional statements
- Components
- Simplicity

# 3. What is JSX?

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
JSX allows us to write HTML in React.
JSX converts HTML tags into react elements.

_Flow:_

JSX => transpiler (BIBEL) => React.createElement function

# 4. Is it possible to use react without JSX?

YES

React.createElement(type, [props], [...children])

# 5. What is the difference between Element and Component?

**React Element** is the basic building block in a react application, it is an object representation of a virtual DOM node.  
React Element contains both type and property.  
It may contain other Elements in its props.  
React Element does not have any methods, making it light and faster to render than components.

**React Component**: It is independent and reusable.  
It returns the virtual DOM of the element. One may or may not pass any parameter while creating a component.  
A component can be further described into functional components and class components.
Starts from capital letter

| Element                                                                    | Component                                                                                                                           |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| An element is always gets returned by a component.                         | A component can be functional or a class that optionally takes input and returns an element.                                        |
| The element does not have any methods.                                     | Each component has its life cycle methods.                                                                                          |
| A React element is an object representation of a DOM node.                 | A component encapsulates a DOM tree.                                                                                                |
| Elements are immutable i,e once created cannot be changed.                 | The state in a component is mutable.                                                                                                |
| An element can be created using React.createElement( ) with type property. | A component can be declared in different ways like it can be an element class with render() method or can be defined as a function. |
| We cannot use React Hooks with elements as elements are immutable.         | React hooks can be used with only functional components                                                                             |
| Elements are light, stateless and hence it is faster.                      | It is comparatively slower than elements.                                                                                           |
