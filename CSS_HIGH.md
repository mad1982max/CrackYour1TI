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

- _Layout_ (**Flex**, **Grid**) - providing a more efficient way to lay out, align and distribute space among items in a container, even if we don't know the sizes of elements

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
