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

# 8. What is redux-saga?

Middleware library that helps us with API calls or side effects.
Build using _generators_

# 9. What is the mental model of redux-saga?

<img src ='./assets/images/saga-mental.png'>

# 10. What are the differences between call and put in redux-saga

- _call()_ function is used to create effect description, which instructs middleware to call the promise.

- _put()_ function creates an effect, which instructs middleware to dispatch an action to the store.

# 11. What are the differences between redux-saga and redux-thunk

| Redux-Thunk                                   | Redux-Saga                                                                                                      |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Less boilerplate code                         | More boilerplate code                                                                                           |
| Easy to understand as compared to redux-saga  | Difficult to understand as there are multiple concepts to learn like generator functions and redux-saga effects |
| May be difficult to scale up                  | Easy to scale as compared to redux-thunk                                                                        |
| Action creators may hold too much async logic | Action creators stay pure                                                                                       |
| May get difficult to test                     | Comparatively easy to test as all your async logic remains together                                             |

# 12. What is Redux DevTools?

Redux DevTools is used for debugging application's state changes

# 13. What are the features of Redux DevTools?

- inspect every state and action payload.
- go back in time by cancelling actions.
- if change the reducer code, each staged action will be re-evaluated.
- if the reducers throw, we will see during which action this happened, and what the error was.

# 14. What are Redux selectors and Why to use them?

Selectors - logic for deriving data (usually written as functions)

Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.

# 15. What is Redux Form?

Manager form state in Redux

_main features:_

- Field values persistence via Redux store.
- Validation (sync/async) and submission.
- Formatting, parsing and normalization of field values.

# 16. What are the main features of Redux Form?

- Field values persistence via Redux store.
- Validation (sync/async) and submission.
- Formatting, parsing and normalization of field values.

# 17. How to add multiple middlewares to Redux?

const store = createStore(reducer, applyMiddleware(mw1, mv2, ...));

# 18 How Relay is different from Redux?

- manages state originated from the server
- all access to the state is used via GraphQL querys (for reading data) and mutations (for changing data)
