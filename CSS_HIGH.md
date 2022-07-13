# 1. What are the possible ways to apply CSS styles to a web page?

It is exists 3 ways to add styles to the page:

- _Inline_: style attr are inside html element

```html
<div style="color: green;padding-top: 10px">Content</div>
```

- _Internal_: styles for single HTML are inside \<style\> tag. The last is in \<head\>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        color: red;
      }
    </style>
  </head>
  <body>
    ...
  </body>
</html>
```

- **External** styles for many HTML pages which connected to page with \<link\> tag in \<head\>.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    ...
  </body>
</html>
```

# 2. What does the cascading portion of CSS mean?

_Cascading_ is the order in which different styles are applied to a web page. Another words styling rules “cascade” down from several sources and overwrite styles rules depending of _importance_ (adding _important_ to rule), _origin_ (browser, user rules), _specificity_ (weight of rule), _inheritance_ (some CSS properties by default inherit values set on the current element's parent element and some don't) and source _order_ (if the weight of the rule is the same, the lowest rule overwrites the style).

# 3. New features in CSS3

Most used new features:

- _Layout_ (**Flex**, **Grid**) - providing a more efficient way to layout, align and distribute space among items in a container, even if we don't know the sizes of elements

- _CSS Custom Properties_ which allow us to reuse some styles

```css
:root {
  --alert-color: red;
}

#user {
  color: var(--alert-color);
}
```

- _CSS Filters_ for manipulations with images
- _Box/Text Shadow_
- _Opacity_
- Expands _Attribute Selectors_
- Expand _pseudo-classes_
- _Rounded Corners_
- _New Colors_ (RGBA, HSL, HSLA, Gradients)
- _Multiple Background Images_
- _CSS Animations_
- _Calculating Values With calc()_
- _Box Sizing_
- _Media Queries_
- _CSS 3D Transforms_

# 4. Explain CSS grid layout with example

**Grid** - two-dimensional grid-based layout system that provides more efficient way to layout, align and distribute space among items in a container
Main concepts: _container_, _line_, _track_ (row or column), _area_, _item_

- **HTML**

```html
<div id="grid">
  <div id="logo">Logo</div>
  <div id="photo">Photo</div>
  <div id="title">Card Title</div>
  <div id="score">Score</div>
  <div id="stats">Stats</div>
  <div id="board">Board</div>
  <div id="controls">Controls</div>
</div>
```

- **CSS**

```css
#grid {
  display: grid;
  gap: 4px;
  grid-template:
    "logo title board board board"
    "stats stats  board board board"
    "photo score ctrls ctrls ctrls";
  grid-template-columns: repeat(2, 1fr) repeat(3, 2fr);
  grid-template-rows: auto;
}

#grid > * {
  display: block;
  padding: 5px;
  min-height: 50px;
  border: 1px solid #cdbb55;
  border-radius: 5px;
  background: #aaeebb;
}

#logo {
  grid-area: logo;
}

#photo {
  grid-area: photo;
}

#title {
  grid-area: title;
}

#score {
  grid-area: score;
}

#stats {
  grid-area: stats;
}

#board {
  grid-area: board;
}

#controls {
  grid-area: ctrls;
}
```

- **Result**  
  <img src="/assets/images/grid.png">

# 5. What is CSS preprocessor?

**CSS preprocessors** is a program that extend the default capabilities of CSS (variables, nesting, inheritance, mixins, functions, mathematical operations)

The Most popular are Sass, LESS, Stylus, PostCSS. They do the same but in different ways and with its own syntaxes.

As example:
**Sass** has two syntaxes (_.sass_: indentation-based and omits semicolons and curly brackets and _.scss_ with standard CSS syntax with braces and semicolons).
_Main features_: variables, @mixins, @extends, Loops and conditionals, nesting

**WAS**

```scss
$primary-font-size: 14px;
$hover-primary-font-size: 16px;

@mixin reset {
  margin: 0;
  padding: 0;
}

.custom-button {
  @include reset;
  font-size: $primary-font-size;
  &:hover {
    font-size: $hover-primary-font-size;
  }
}
```

**BECOMES**

```css
.custom-button {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.custom-button:hover {
  font-size: 16px;
}
```

_Pros_:

- CSS follows DRY principle
- It is easier to maintain the code
- Code becomes more organized
- Special functionality of joining multiple stylesheets into one
- Backward compatibility

_Cons_:

- Harder to Debug
- Compilation slows down development
- Additional knowledge for developers

_Flow_:
CSS Preprocessor => Transpiler => CSS file

# 6. What are media queries?

**Media queries** - queries inside css that allows to modify styles rules depending on specific characteristics and parameters (screen, print, orientation, width/height of the screen)

They describe:

- media types (all, print, screen)
- media features (characteristic of the user agent, output device, or environment)

Includes:

- logical operators (not, and, only and their combinations)

As example

```css
@media (min-width: 600px) and (orientation: landscape) {
  ...;
}
```

# 7. What does box-sizing do?

**box-sizing** defines if _padding_ and _border_ are includes to total width and height of an element

**Syntax**
_box-sizing: content-box|border-box|initial|inherit;_

- content-box - default: width and height of the element includes only content
- border-box - width and height of the element includes content, padding and border
- initial - sets to default
- inherit - inherits this property from its parent element

# 8. Explain some pros and cons for CSS animations versus JavaScript animations

Animations on the HTML elements with CSS can be achieved by using _CSS Transitions_ or _CSS Animations_

**CSS Transitions** use css property _'transition'_ and set delay of the animation , duration, name of the animated property and timing function.

**CSS Animations** use _@keyframes_ rule where we can define list of css styles in certain point of animation

Animation via CSS are used

- with small simple animations (open/close burger menu, appear navigation from the border of the screen, showing a tooltips)
- when JS is disabled
- when we don't want to use some external libraries

**JS Animation** uses _Web Animations API_

JS Animation are used:

- in more complicated cases when we want get full control of animation (slow down, pause them, stop, reverse, and manipulate elements ) in all steps and interact with user actions
- required animation is not supported by CSS

_Frameworks_ for animation in JS:

- GreenSock
- Velocity
- jQuery etc.
