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
