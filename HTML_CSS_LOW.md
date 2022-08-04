# 1. What is the DOM? How does the DOM work?

The _DOM_ is and acronym for _Document Object Model_.

<img src = "./assets/images/dom.png"/>

The DOM - is a tree structure representing different elements of an HTML page, and each HTML element is a “node.”

Main node types (most often work with them) in the DOM:

- Element nodes
- Text nodes
- Comment nodes

The nodes in the DOM are also referred to as parents, children, and siblings, depending on their relation to other nodes.

With the DOM, we can create and build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the DOM

# 2. Explain the difference between layout, painting and compositing?

**Layout**

Browser will determine how much space each element takes up and where to place it.

**Painting**

This is the process of filling in pixels. It involves drawing out elements.

**Compositing**

Browser draws element to the screen in the correct order so the page renders correctly.

# 3. What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?

- Performance benefit for customers (the initial page of the website load is faster as there are fewer codes to render)
- Search engines can crawl the site for better SEO

# 4. What is difference between Select and Datalist?

| select                                                 | datalist                                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| User can choose only one option from the given list    | User can choose any option from the given list but can also use its own input         |
| This tag is a form input type                          | This tag is not a form input type                                                     |
| User has to scan a long list so as to select an option | User can easily input the option and get the hints and then can be chosen by the user |
| User can be restricted to a list of options            | User is not restricted by the list of options                                         |
| It doesn’t provide the auto-complete feature           | It provides the auto-complete feature                                                 |

# 5. What is the difference between class selectors and id selectors?

**ID** can be used to identify one element, whereas a **class** can be used to identify more than one

# 6. What is the difference between the “nth-child()” and “nth-of-type()” selectors?

```html
<div>
  <h1>Title</h1>

  <p>Paragraph 1</p>

  <p>Paragraph 2</p>
</div>
```

**_Paragraph 1_**

```css
p:nth-child(2) {
  /* ....; */
}
```

**_Paragraph 2_**

```css
p:nth-of-type(2) {
  /* ....; */
}
```

# 7. How do you specify units in the CSS?

- Absolute (px, pc,pt, ...)
- Relative (em, rem, %, vh, vw, vmin, vmax)

# 8. What is the difference between RGBa, HEX and HSLa?

- RGBa, HSLa - have alpha channel

**HEX** - color as hexadecimal value in the format #RRGGBB.
R=red, G=green, b=blue hexadecimal value between 0 and FF

**RGBa** - Color as decimal value in the form: rgb(R,G,B) with alpha channel
R=red, G=green, b=blue decimal value between 0 and 255

**HSLa** define colors using the Hue-saturation-lightness-alpha model (HSLA).
HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the color.

# 9. Flex box

Flexbox was designed as a one-dimensional layout model (it deals with layout in one dimension at a time — either as a row or as a column), and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.
