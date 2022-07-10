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

   It is exists 3 behaviors of scripts:

   - default behavior (tag 'script' without additional attribute) when fetching and executing block html parsing
   - with **async** attr: only script execution interrupt html parsing, fetching is parallel
   - with **defer** attr: fetching is parallel, script execution - after html parsing

4. Render TREE - combining of DOM and CSSOM together. It contains the contents and the styles associated with the content. Only visible content.

5. Layout - step where browser figure out where and how all the elements are positioned on page (width,height,position etc.)

6. Paint - converting visible content of the page to pixels to be displayed on the screen

# How can I get indexed better by search engines?

SEO - is the process of improving website to achieve a higher position in search engine's ranking
Main steps:

- Fill **title** tag (for understanding what a page is about)
- Fill **meta** tags: _description_ (how pages to be described in the search listings), _keywords_, _charset_, _viewport_, _language_
- Use _semantic HTML_ (menu, nav, header, footer, hX, section, main, link tags)
- _Alternative text_ (alt) for images and videos
- Use _meaningful URL_ (yes: xxx/product/1, no xxx/pageNNN, where NNN - number)
- Create _XML or HTML sitemaps_
- _Quick loading_ of the pages
- Prefer _SSR_
- Orient to most popular Search Engines when improving html

# What is desktop first and mobile first design approach?

Two different ways of creating responsive web design:

- Desktop first: write ccs rules for desktop at first and extend them with css rules for smaller screens (mobile devices)
- Mobile first: designing process starts for the smallest devices first and then add more functionalities for bigger screen sizes
