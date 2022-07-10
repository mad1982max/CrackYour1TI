# What is Critical Rendering Path?

CRP is a sequence of events that happening in the browser in the middle of such points:

1. after we receive answer from server with HTML page (bytes of information) in response to our request
2. before we can see actual pixels in the screen

Main CRP steps:

1.  Creating DOM-tree
    Flow:

- converting bytes to characters
- identifying tokens
- creating NODES objects
- incrementally building DOM tree with all nodes and all relationships between them

2. Creating CSSOM-tree - object with styles for DOM
   Blocking operation

3. Fire of JS
   Flow:

   - script fetch
   - script execution
     Blocking operation.

   It is exist 3 behaviors of scripts:

   - default behavior (tag 'script' without additional attribute) when fetching and executing block html parsing
   - with **async** attr: only script execution interrupt html parsing, fetching is parallel
   - with **defer** attr: fetching is parallel, script execution - after html parsing

4. Render TREE - combining of DOM and CSSOM together. It contains the contents and the styles associated with the content. Only visible content.

5. Layout - figure out where and how all the elements are positioned on page (width,height,position etc.)

6. Paint - converting visible content of the page to pixels to be displayed on the screen
