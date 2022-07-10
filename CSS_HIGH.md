# What are the possible ways to apply CSS styles to a web page?

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

# What does the cascading portion of CSS mean?

_Cascading_ is the order in which different styles are applied to a web page. Another words styling rules “cascade” down from several sources and overwrite styles rules depending of _importance_, _origin_, _specificity_, and source _order_.
