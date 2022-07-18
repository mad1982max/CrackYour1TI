# 1. What are the css selectors?

**CSS selectors** define the elements to which a set of CSS rules apply.

- _Type of selectors:_

  - Universal selector (\*)
  - Type selector
  - Class selector
  - ID selector
  - Attribute selector
  - Pseudo

- _Operations with selectors:_

  - Grouping (with ",")
  - Combinators (" ", ">", "~", "+")

# 2. What is the difference between Pseudo-classes and pseudo-elements?

**A pseudo-class** is a selector that selects elements that are in a _specific state_, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

**Pseudo-elements** behave in a similar way. However, they act as if you had added a whole _new HTML element_ into the markup, rather than applying a class to existing elements.

# 3. When to use css grid and flexbox?

| FLEX                                                             | GRID                                                                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| One Dimensions (can work on either row or columns at a time)     | Two Dimensions (row or columns)                                                |
| Focus on Content Flow (mostly helps align content & move blocks) | Focus on Content Placement ( helps you create the outer layout of the webpage) |

# 4. What is CSS BEM?

**BEM** - methodology, which helps us to structure CSS code

_Key elements_ of the methodology — Block, Element and Modifier

| Block                                             | Element                                                                                 | Modifier                                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Standalone entity that is meaningful on its own.  | A part of a block that has no standalone meaning and is semantically tied to its block. | A flag on a block or element. Use them to change appearance or behavior. |
| Examples:header, container, menu, checkbox, input | Examples:menu item, list item, checkbox caption, header title                           | Examples:disabled, highlighted, checked, fixed, size big, color yellow   |

_Main features:_

- Modularity
- Reusability
- Structure
