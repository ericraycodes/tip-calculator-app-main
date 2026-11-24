# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://github.com/ericraycodes/tip-calculator-app-main](https://github.com/ericraycodes/tip-calculator-app-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)



## My process

### Built with

- Semantic HTML5 markup
- SASS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned to use `inputmode="numeric"` to <input> elements. This allows numeric touch keypads to devices. Adding the `pattern` attribute allows me to check input validity with `.checkValidity()` in JavaScript.
```html
<input 
    type="text" 
    inputmode="decimal"
    pattern="[0-9]*[.]?[0-9]*"
    placeholder="0" 
/>
<input 
    type="text" 
    inputmode="numeric" 
    pattern="[0-9]*" 
    placeholder="0" 
/>
```

### Continued development

- Mobile-First Design
- SCSS
- CSS Grid
- JavaScript
- Atomic git commits


## Author

- Frontend Mentor - [@ericraycodes](https://www.frontendmentor.io/profile/ericraycodes)
- GitHub - [ericraycodes](https://github.com/ericraycodes)
