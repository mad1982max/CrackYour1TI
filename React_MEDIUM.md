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

# 10. What is prop drilling?

Prop drilling refers to the process you have to go through to get data to parts of the React Component tree

# 11. What are portals in React?

_Portals_ is a way to render an element outside of its component hierarchy (in a separate component)

_ReactDOM.createPortal(child, container)_

_When_ we should to use:

- Floating menus
- Widgets
- Modals
- Tooltips

# 12 What are stateless components?

_components that don't have state_

# 13 What are stateful components?

_components that have state_

# 14 What are the drawbacks of MVW pattern !!!!!

- DOM manipulation is very expensive which causes applications to behave slow and inefficient.
- Due to circular dependencies, a complicated model was created around models and views.
- Lot of data changes happens for collaborative applications(like Google Docs).
- No way to do undo (travel back in time) easily without adding so much extra code.

# 15 Are there any similarities between Redux and RxJS?

Redux uses the Reactive paradigm. The Store (is reactive) observes actions from a distance, and changes itself.

# 16 How to use connect from React Redux?

```jsx
class someComponent {
  ///...
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(someComponent);
```

# 17 How to reset state in Redux?

_Steps_:

- create action with type "reset" (as example)
- in reducer return initial state when we receive type "reset"
- dispatch "reset action"

# 18 Whats the purpose of at symbol in the redux connect decorator?

**@** - _decorator_ sign. Decorators help to modify class.

In redux context:

```jsx
@connect(mapStateToProps, mapDispatchToProps)
export default class MyApp extends React.Component
```

instead

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
```

# 19. Why are Redux state functions called reducers?

Functions always return the accumulation of the state (based on all previous and current actions)

# 20. How to make AJAX request in Redux?

- Redux Promise Middleware

```js
function getUsers() {
  return {
    type: "GET_USERS",
    payload: fetch("someApi")
      .then((response) => response.json())
      .then((users) => ...),
  }
}
```

- Redux Thunk

```js
function getUsers() {
    return dispatch => {
        return fetch("someApi")
        .then(response => response.json())
        .then(users => dispatch({ type: "SET_USERS", users })
    }
}
```

- Redux Saga

# 21. What is the difference between component and container in React Redux?

**Component** is a class or function that describes part of a React UI.

**Container** is a React component that is connect-ed to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements (they delegate rendering to presentational child components)

# 22. What are the different ways to write mapDispatchToProps()?

- Function

```jsx
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
```

- Object

```jsx
const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(App);
```

# 23. What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?

If the ownProps parameter is specified, react-redux will pass the props that were passed to the component into connect functions

# 24. How to structure Redux top level directories?

- Components
- Containers
- Actions
- Reducers
- Store

# 25. What is Redux Thunk?

Middleware for async action

# 26. How to set initial state in Redux?

- Assign default value (initial state) to reducer's first parameter (store)
- Pass an initialState as a second argument to createStore()

# 27. What are the <Router> components of React Router (v.5)?

"Router" The common low-level interface for all router components:

```jsx
<BrowserRouter> - //uses the HTML5 history API
<HashRouter> - // uses the hash portion of the URL (i.e. window.location.hash)
<MemoryRouter> - //keeps the history of your “URL” in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.
<NativeRouter> - //for iOS and Android apps built using React Native
<StaticRouter> - //never changes location
```

# 28. What is the purpose of push and replace methods of history?

If the history as an array of visited locations:

- push() will add a new location to the array,
- replace() will replace the current location in the array with the new one.

# 29. How do you programmatically navigate using React router?

**v4**:

- **withRouter HOF**:

```jsx
const Button = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => {
      history.push("/new-location");
    }}
  >
    Click Me!
  </button>
));
```

- **Route component + render props pattern**:

```jsx
const Button = () => (
  <Route
    render={({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/new-location");
        }}
      >
        Click Me!
      </button>
    )}
  />
);
```

**v5**

- **useHistory hook**: history.push('/location)

**v6**

- **useNavigate()**: navigate("../location", { replace: true });

# 30 How to get query parameters in React Router

**v6**

- _useSearchParams();_

**v5**

- _useLocation()_ : location.search

**v4**

- _this.props.location.search_

# 31 Why you get "Router may have only one child element" warning?

We have to wrap Routes in a Switch block (it should be the parent of all Routes )

# 32. How to pass params to history.push method in React Router v4?

```js
this.props.history.push({
  pathname: "some-route",
  search: "?id=555",
  state: {
    someData,
  },
});
```

# 33. How to implement default or NotFound page?

at the bottom of all routes:

```jsx
<Route component={Page404}>
```

# 34. How to get history on React Router v4?

- import _createBrowserHistory_ from _history_
- pass _it_ to _Router_ as _history_ attr

# 35. How to perform automatic redirect after login?

in useEffect (for example)

```js
if(isLogIn) {
  <Redirect to '/mainPath'>
}

```

//or

useNavigate() hook
