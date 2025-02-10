# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./Screenshot-OrderSummaryCardComponent.png)


### Links

- Solution URL: [@FrontendMentor.io](https://www.frontendmentor.io/solutions/order-summary-component-by-gusanchedev-Vy3yi_GEnK
- Live Site URL: [@Vercel.com](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles


### What I learned

I used Tailwindcss and vite for deploying the challenge. I learned to customize tailwind for specific metrics. Also I practiced creating react components.


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />

    <title>Frontend Mentor | Order summary card</title>
  </head>
  <body class="bg-pale-blue flex justify-center items-center h-screen bg-[url('/pattern-background-desktop.svg')] max-sm:bg-[url('/pattern-background-mobile.svg')] bg-no-repeat bg-cover bg-bottom">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
```js

const OrderSummary = () => {
  return (
    <div className="text-center text-base font-display bg-white w-[450px] h-[697px] rounded-[11px] max-sm:rounded-[20px] max-sm:w-[327px] max-sm:h-[567px]">
      <img src="illustration-hero.svg" alt="Hero image" className="rounded-t-[11px] drop-shadow-hero"/>
      <h1 className="text-dark-blue text-[28px] font-black my-7 max-sm:my-6 max-sm:text-[22px]">
        Order Summary
      </h1>
      <p className="text-desaturated-blue font-medium max-sm:text-[15px] max-sm:my-6 ">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="flex justify-between items-center mt-7 bg-very-pale-blue mx-12 max-sm:mx-6 rounded-[11px] py-[25px] px-6 max-sm:py-4" >
        <div className="flex items-center justify-center gap-4">
          <img src="icon-music.svg" alt="" />
          <div>
            <p className="text-dark-blue text-base max-sm:text-[14px] font-black">Annual Plan</p>{" "}
            <p className="font-bold max-sm:text-[14px] text-desaturated-blue">$59.99/year</p>
          </div>
        </div>
        <p className="underline font-extrabold text-sm max-sm:text-[13px] text-bright-blue hover:cursor-pointer hover:text-[#796FF7] hover:no-underline">Change</p>
      </div>
      <button className="bg-bright-blue text-white font-black rounded-[11px] my-7 max-sm:my-6  w-[354px] max-sm:w-[279px] h-[50px] drop-shadow-card hover:cursor-pointer hover:bg-[#796FF7]">
        Proceed to Payment
      </button>
      <p className="text-desaturated-blue font-black text-base max-sm:text-[15px] hover:cursor-pointer hover:text-dark-blue pb-7 max-sm:pb-6 ">Cancel Order</p>
    </div>
  );
};

export default OrderSummary;
```
```css
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap");
@import "tailwindcss";

@theme {
  --color-pale-blue: hsl(225, 100%, 94%);
  --color-bright-blue: hsl(245, 75%, 52%);
  --color-very-pale-blue: hsl(225, 100%, 98%);
  --color-desaturated-blue: hsl(224, 23%, 55%);
  --color-dark-blue: hsl(223, 47%, 23%);
  --font-display: "Red Hat Display", sans-serif;
  --drop-shadow-card: 0 20px 20px rgba(56, 42, 225, 0.2);
  --drop-shadow-hero: 0 4px 4px rgba(0, 0, 0, 0.25);
}
```

### Continued development

I will continue using tailwind and react as practice in my learning process even I could just use plain CSS and HTML to get familiar with these technologies.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)
- LinkedIn - [@gusanchefullstackdev](https://www.linkedin.com/in/gusanchefullstackdev/)