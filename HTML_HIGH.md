# 1. What is Critical Rendering Path?

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

# 2. How can I get indexed better by search engines?

SEO - is the process of improving website to achieve a higher position in search engine's ranking
Main steps:

- Fill **title** tag (for understanding what a page is about)
- Fill **meta** tags: _description_ (how pages to be described in the search listings), _keywords_, _charset_, _viewport_
- Add attr _lang_ to _html_ tag,
- Use _semantic HTML_ (menu, nav, header, footer, hX, section, main, link tags)
- _Alternative text_ (alt) for images and videos
- Use _meaningful URL_ (yes: xxx/product/1, no xxx/pageNNN, where NNN - number)
- Create _XML or HTML sitemaps_
- _Quick loading_ of the pages
- Prefer _SSR in SPA_
- Orient to most popular Search Engines when improving html

# 3. What is desktop first and mobile first design approach?

Two different ways of creating responsive web design:

- Desktop first: write ccs rules for desktop at first and extend them with css rules for smaller screens (mobile devices)
- Mobile first: designing process starts for the smallest devices first and then add more functionalities for bigger screen sizes

# 4. How to make page responsive?

We must strive for responsive web design. Our app should looks good on different screen sizes.
It is automatically process.

Steps:

- Set instruction to **viewport** in **meta** tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

which define page's dimensions and scaling

- Responsive IMGs
  Set to **img** _max-width:100%_

- Use different sets of images for different screen sizes

```html
<picture>
  <source srcset="small.jpg" media="(max-width: 500px)" />
  <source srcset="bigger.jpg" media="(max-width: 1000px)" />
  <source srcset="biggest.jpg" />
  <img src="small.jpg" alt="cow eats grass" />
</picture>
```

- Responsive _sizes_ of elements based on %, vw, vh, em, rem

- _Media Queries_ - set of css rules for different screens, screen sizes and other specific characteristics(orientation, existing hover)

```css
@media screen and (min-width: 1000px) and (orientation: landscape) {
  ...;
}
```

```css
@media (width >= 1000px) {
  ...;
}
```

- use _external_ libraries (Bootstrap)

# 5. What are the building blocks of HTML5?

- _Semantics_: allowing you to describe more precisely what your content is.
- _Connectivity_: allowing you to communicate with the server in new and innovative ways.
- _Offline and storage_: allowing webpages to store data on the client-side locally and operate offline more efficiently.
- _Multimedia_: making video and audio first-class citizens in the Open Web.
- _2D/3D graphics and effects_: allowing a much more diverse range of presentation options.
- _Performance and integration_: providing greater speed optimization and better usage of computer hardware.
- _Device access_: allowing for the usage of various input and output devices.
- _Styling_: letting authors write more sophisticated themes.

# 6. What are the semantic tags available in html5?

_Semantic tags_ - tags that have meaning for search engines, accessability and people. Due to such tags we can define their content and its importance.
Main semantic tags: header, footer, main, section, article, aside, nav, link, hX, small, time etc

# 7. Why you would like to use semantic tag?

They contain information about their content and its importance
Due to this they improve accessability of the page (for screen readers as example) and improve ranking of the site after search engines works

# 8. What is accessibility? ARIA role means in a web application

_Accessibility_ - providing better user experience for navigating and interacting with site depending on specific needs of people (people with disabilities or inability in some cases to use touch screens)
_a11y_ - guideline with accessibility rules
Main steps:

- define the _language_ of your document or specific tag
- set _title_ of the document
- _hide_ unnecessary content for readers by using 'display:none' and provide mechanisms _to skip_ to desired content
- add _alt_ attributes for imgs and videos
- use _semantic_ tags
- provide correct _focus_ for main elements when user use keyboard or voice devices
- use _headings_ for ranking context
- use _labeling_ in forms
- _notifying_ the user of errors
- _color contrast_ (provide readable text)

_Aria-role_ - attribute of tags for providing semantic meaning and helping third party devices and soft to interact with the site thus providing best user experience
Many semantic elements in HTML have a role by default.
The role attribute can provide semantics for non-semantic elements.
All values assigned to _role=""_ should correspond to valid _WAI-ARIA roles_.

# 9. What is the purpose of the alt attribute on images?

Main purposes:

- improve _SEO_ by providing proper description of image for relevant ranking in web
- provide _people with disabilities_ with best user experience when they use screen readers or other devices
- in case of bad connection helps us to understand what was on image

# 10. Define semantic markup. What are the semantic meanings for _section_, _article_, _aside_, _nav_, _header_, <footer> and when/how should each be used in structuring html markup?

_header_ is used to define the header for a document or a section. It contains the information related to the title and heading of the related content.
Often uses for introductory content, logo, navigation links.
There can be several _header_ elements in one document.

_footer_ is used to define the footer for a document or a section. Often it is used in the bottom of a page or a section. It may contains info about copyright info, contacts, sitemap

_nav_ is used for navigation on the site

_aside_ is used for non main information (advertisement) or it can provide information about the main content. But in both cases the relationship must be indirect.

_section_ is used to group logically related content and create page sections (contacts, news)

_article_ is specifies independent part of content that can be reuse (posts, news, blogs)

# 11. When should you use section, div or article?

_section_ - for grouping logically related content (contacts, news, posts, articles)  
_article_ - for independent reusable repeating content (posts, news, blogs)
_<div>_ - non-semantic tag that can be used for dividing text

```html
<section class="posts">
  <article class="post">
    <h2 class="title">Post 1</h2>
    <section class="content">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <div class="text">bla-bla-bla 1</div>
    </section>
    <div class="author">Author 1</div>
  </article>
  <article class="post">
    <h2 class="title">Post 2</h2>
    <section class="content">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <div class="text">bla-bla-bla 2</div>
    </section>
    <div class="author">Author 2</div>
  </article>
</section>
```

# 12. Describe the difference between a cookie, sessionStorage and localStorage?

One of the main principles of REST API is stateless.
After closing connecting server forgets everything about the user.
But we can avoid it using cookie, sessionStorage or localStorage

**Cookie** a small text file that is stored in browser.It contains from key-value pairs.
Cookies are set by server using the response and HTTP-Header _Set-Cookie_. Cookies can contain _path_, _domain_ (both define where the cookie is accessible), _expires_, _max-age_ (time of cookies living), _secure_, _samesite_ (both defines security settings).
When we send request to server next time browser sends the cookie using the _Cookie_ HTTP-header.

==Restriction:==

- max length of name=value pair is 4kb
- max number of cookies per domain ~ 20

**localStorage** and **sessionStorage** - allows to save data (key/value pairs) in the browser even after page refresh (_sessionStorage_) and browser restart (_localStorage_).

==Features:==

- Are not sent to server with each request.
- Server can’t manipulate storage via HTTP headers.

==Restriction:==

- can save ~ 5 megabytes of data
