# 1. When to use a Class Component over a Function Component?

- if you want use "getSnapshotBeforeUpdate", "componentDidCatch" and "getDerivedStateFromError" which unavailable through hooks now
- if you use outside libraries and they require 'this'

# 2. What is the difference between HTML and React event handling?

| In HTML                                                                           | In ReactJS                                                                                                        |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| we specify event using “onclick”,”onsubmit”which is the normal convention.        | We specify the event using “onClick”,”onSubmit” likewise which is camel case convention.                          |
| We bind or provide the listener in form of the string.                            | We bind or provide the listener in form of function name or method name as a variable.                            |
| The string we pass to the listener should have “( )” at the end in order to work. | We are only suppose to pass the method name and nothing else. React can determine that it has to run this method. |
| We can add event listener any time using external javascript.                     | We have to specify all the Events at the time of creating the component.                                          |

# 3. What is the difference between createElement and cloneElement?

- JSX elements will be transpiled to _React.createElement()_ functions to create React elements which are going to be used for the object representation of UI.
- _cloneElement_ is used to clone an element and pass it new props.

# 4. What is the purpose of using super constructor with props argument?

Access to **this.props** in constructor

# 5. Why React uses className over class attribute?

**class** is for creating classes in React

# 6. What is the difference between mapStateToProps() and mapDispatchToProps()?

- **mapStateToProps()** helps component get updated state

- **mapDispatchToProps()** helps component to fire an action event (dispatching action which may cause change of application state)

# 7. Whats the purpose of at symbol in the redux connect decorator?

**for using**

```jsx
@connect(mapStateToProps, mapDispatchToProps)
export default class MyApp extends React.Component {
  // ...
}
```

**instead**

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
```
