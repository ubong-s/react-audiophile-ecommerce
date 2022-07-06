# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  :heavy_check_mark: View the optimal layout for the app depending on their device's screen size
-  :heavy_check_mark: See hover states for all interactive elements on the page
-  :heavy_check_mark: Add/Remove products from the cart
-  :heavy_check_mark: Edit product quantities in the cart
-  :heavy_check_mark: Fill in all fields in the checkout
-  :heavy_check_mark: Receive form validations if fields are missed or incorrect during checkout
-  :heavy_check_mark: See correct checkout totals depending on the products in the cart
   -  :heavy_check_mark: Shipping always adds $50 to the order
   -  :heavy_check_mark: VAT is calculated as 20% of the product total, excluding shipping
-  :heavy_check_mark: See an order confirmation modal after checking out with an order summary
-  :heavy_check_mark: **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![Design preview for the Audiophile e-commerce website coding challenge](./preview.jpg)

### Links

-  Live Site URL: [Audiophile](https://devubong-audiophile.netlify.app/)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  [React](https://reactjs.org/) - JS library
-  [Redux Toolkit](https://redux-toolkit.js.org/) - For state management
-  [Styled Components](https://styled-components.com/) - For styles
-  [Formik](https://formik.org) - For checkout form
-  [Framer motion](https://www.framer.com/) - For page transitions

### What I learned

-  Conditional form validation
-  Managing states of cart, mobile menu and checkout modal
-  First time using `overflow: clip` and scroll disable without distorting page width

```css
&.modal-active,
&.cart-active {
   height: 100vh;
   overflow: clip;

   -ms-overflow-style: none;
   scrollbar-width: none;

   &::-webkit-scrollbar {
      display: none;
   }
}
```

### Continued development

-  Unit Testing
-  Typescript conversion
-  Fullstack

## Author

-  Website - [Ubong Sylvester](https://devubong.com/)
-  LinkedIn - [Ubong Sylvester](https://www.linkedin.com/in/ubong-sylvester)
-  Twitter - [@devubong](https://www.twitter.com/devubong)
