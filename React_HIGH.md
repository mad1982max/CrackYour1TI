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

# 6. How to create components in React?

class, functional component (including arrow function)

```jsx
const User = (props) => {
  ///...some logic
  return <div>{props.name}</div>;
};
export default User;
```

# 7. What is state in React?

_state_ is an object that determines how that component renders & behaves.  
"state" is what allows you to create components that are dynamic and interactive.
"state" can be changed

# 8. What are props in React?

Props are arguments passed into React components.

# 9. What is the difference between state and props?

- Components receive data from outside with props, whereas they can create and manage their own data with state
- Props are used to pass data, whereas state is for managing data
- Data from props is read-only, and cannot be modified by a component that is receiving it from outside
- State data can be modified by its own component, but is private (cannot be accessed from outside)
- Props can only be passed from parent component to child (unidirectional flow)

# 10. Why should we not update the state directly?

If we mutate the state directly, it won't change the reference of the state in the previous virtual DOM as well.  
So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload.

# 11. Is the state updated synchronously?

State updates are asynchronous. This was true in class-based components. It's true with functions/Hooks

# 12. How to bind methods or event handlers in JSX callbacks?

- **Binding in Constructor**: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods.

```js
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // ...
  }
}
```

- **Public class fields syntax**:

```js
handleClick = () => {
  console.log("this is:", this);
};
```

- **Arrow functions in callbacks:**

```html
<button onClick={(event) => this.handleClick(event)}>{'Click me'}</button>
```
