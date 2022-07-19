# 1. What are Pure Components?

Class components that extend the React.PureComponent class and has life circle method 'shouldComponentUpdate(nextProps, nextState)' under the hood.
Uses for performance optimization

# 2. If Pure Component is better from the optimization point of view, why don't we use it by default?

The comparison to decide whether or not a component should be rerendered costs something - it may slower app

# 3. What is the purpose of callback function as an argument of setState()?

That’s the callback function that will be executed after the state value is updated.

# 4. What are inline conditional expressions?

Allows to show on the page elements/components by some condition

- {condition ? ("condition is true") : ("condition is false")}

- {condition && "condition is true"} or {!condition && "condition is false"}

# 5. Difference between "createRef" and "useRef"

| useRef                                                                                                                                            | createRef                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| is a hook                                                                                                                                         | is a function                                                                                                              |
| is always used for the functional component                                                                                                       | is used for the class component but we can also use it for the functional components but it will show some inconsistencies |
| always uses the same reference throughout the whole life cycle of the component                                                                   | always creates the new reference with every render                                                                         |
| a) to perform lots of actions like focus for input box, get component’s states; b) to store the props value when the component is the first mount | should use when the React/ HTML elements are dynamic                                                                       |

# 6. What are forward refs?

_forwardRef_ is a helper function from React that allows us to forward a component's ref to another one (as example - from child to parent ).

# 7. What are controlled components?

Controlled components in React are those in which form data is handled by the component’s state.

# 8. What are uncontrolled components?

Uncontrolled components are those for which the form data is handled by the DOM itself. In React way we should use **ref**

# 9. Controlled Uncontrolled VS Uncontrolled inputs.

| Controlled Component                                                             | Uncontrolled Component                                                   |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| The component is under control of the component’s state                          | Components are under the control of DOM                                  |
| These components are predictable as are controlled by the state of the component | Are Uncontrolled because during the life cycle methods the data may loss |
| Internal state is not maintained                                                 | Internal state is maintained                                             |
| It accepts the current value as props                                            | We access the values using refs                                          |
| Does not maintain its internal state                                             | Maintains its internal state                                             |
| Controlled by the parent component                                               | Controlled by the DOM itself                                             |
| Have better control on the form data and values                                  | Has very limited control over form values and data                       |

# 10 What is prop drilling?

Prop drilling refers to the process you have to go through to get data to parts of the React Component tree

48
What are portals in React?
MEDIUM

49
What are stateless components?
MEDIUM

50
What are stateful components?
MEDIUM

59
What are the drawbacks of MVW pattern

- DOM manipulation is very expensive which causes applications to behave slow and inefficient.
- Due to circular dependencies, a complicated model was created around models and views.
- Lot of data changes happens for collaborative applications(like Google Docs).
- No way to do undo (travel back in time) easily without adding so much extra code.

60
Are there any similarities between Redux and RxJS?
MEDIUM

61
How to dispatch an action on load?
MEDIUM

62
How to use connect from React Redux?
MEDIUM

63
How to reset state in Redux?
MEDIUM

64
Whats the purpose of at symbol in the redux connect decorator?
LOW

66
Why are Redux state functions called reducers?
MEDIUM

67
How to make AJAX request in Redux?
MEDIUM

70
What is the difference between component and container in React Redux?
MEDIUM

72
What are the different ways to write mapDispatchToProps()?

```jsx
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

MEDIUM

73
What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?

If the ownProps parameter is specified, react-redux will pass the props that were passed to the component into your connect functions
MEDIUM

74
How to structure Redux top level directories?
MEDIUM

78
What is Redux Thunk?
MEDIUM

86
How to set initial state in Redux?
MEDIUM

91
What are the <Router> components of React Router v4?
MEDIUM

92
What is the purpose of push and replace methods of history?
MEDIUM

93
How do you programmatically navigate using React router v4?
MEDIUM

94
How to get query parameters in React Router v4
MEDIUM

95
Why you get "Router may have only one child element" warning?
MEDIUM

96
How to pass params to history.push method in React Router v4?
MEDIUM

97
How to implement default or NotFound page?
MEDIUM

98
How to get history on React Router v4?
MEDIUM

99
How to perform automatic redirect after login?
MEDIUM
