# Oxygen

Oxygen is a MuiV5 based monorepo that contains a set of React components and hooks that are used for various projects. The components are built using the [Material UI](https://material-ui.com/) framework and are designed to be used with [React](https://reactjs.org/). The design system contains a custom theme, custom components and custom hooks.

This entire repo is based on some of my favorite libraries, websites etc.

1. [Airbnb](https://www.airbnb.com/) - Airbnb is my favorite website, I love the design and the way it works. I've been using Airbnb for years and I've always loved it. I've always wanted to build something like it and I think I've finally done it. Airbnb influenced every design choice you see. I have a problem... but I love Airbnb. You have to admit, it's a great website. Airbnb is fast, responsive, easy to use and it's a pleasure to use it.
2. [Amplify](https://github.com/aws-amplify) - I love Amplify, I love how easy it is to make a project, i've watched it grow since it's inception and I've always loved it. I've used it for a lot of projects and although it's had it's issues it's never really let me down and it's made it easy to get shit done with AWS. Amplify UI specifically influenced the structure of the design system package. Using rollup, packacing external css and all of that is based on Amplify UI.
3. [JeromeFitz](https://github.com/JeromeFitz/packages) Jerome Fitz was the reason I stuck with turborepo and continued to use a monorepo structure. I randomly encountered his repo once and I just loved how it was structured, he created cleaning scripts, Github actions, neatly seperated his configs and just had this nice repo structure that made me really happy when I looked at it. It's also how I taught myself a lot of monorepo stuff and how to structure things. Look even his commits are clean and include little emojis!!
4. [Mui](https://github.com/mui/material-ui) This whole repo is possible because of Mui and Mui makes life so convinient and easy. I also hope to make some of these components offical Mui components if I can, however these need to be better tested and i'm afraid to open a request becuase I don't know if my code looks like a joke or not.

If anyone just wants to contribute to this repo, feel free! This is my passion project, and I really want to create a template for people so they can make cool things, plus I want to design components that people can use that don't exist publicly like the Google Maps Bussiness Hours input.

### Components

The components included in the design system are:

1. Address - This component allows a user to input an address or select an address from a list of addresses. It's based on the Airbnb address input and uses the Google Places API as well as react hook form.
2. Aspect Ratio - Aspect Ratio is a modified version of Mui Joy's aspect ratio component. It takes a ratio and a child component and renders the child component with the correct aspect ratio.
3. Banner (deprecated) - Banner is a card component that is used to display a banner image. This component is deprecated and should not be used, use Card instead.
4. Business Hours - Business Hours is a component that allows a user to input business hours. It's based on the Googles business hours component from Google Maps. It's built using react hook form.
5. Card - Card is a card component that is used to display a anything, primarly images. It is based on the Mui Card component as well as Airbnb's card component. It uses Aspect Ratio under the hood.
6. Drawer - A modified version of the Mui Drawer component.
7. Error - An error component that is used to display an error message, based on Airbnbs error component.
8. Global - Global styles etc. Don't really use this, will be phased out.
9. Image - Image is a component that is used to display an image. It's based on the Next Image component. It's also irrelevant given updates to Image in Next 13.
10. Layout - Contains diffrent layouts based on Airbnbs layout principles.
11. Legend - A legend for forms.
12. Loading - A loading component built using the Pulse component. For page loading or component loading.
13. Map - A map component that is used to display a map. It's built on the Google Maps API. You can just drop it in, wrap it with the offical Google Maps react component and it just works. I attemted to make this as flexible as possible and similar to Airbnbs Google map. I'm really proud of this one. Also if anyone knows, why does the Airbnb Google Maps script have a property called `hyperloop`? I'm curious.
14. Modal - A modal component that is used to display a modal. It's based on the Mui Modal component and designed in the Airbnb style. (If you can't tell this entire project is based on Airbnbs design system).
15. Navigation - contains the footers for the site.
16. Page Loader - Component based on Loading, just a full screen with the loading component.
17. Pinpoint - Used with Address, allows you to set the exact lat lng of an address using Map.
18. Pulse - A pulse component that is used to display a pulse animation.
19. Share - It's a modal that adds generic share buttons so you can share a page.
20. Skeleton - A skeleton component that is used to display a skeleton animation. Based on Airbnbs skeleton component. Airbnb wraps the skeleton around the component as opposed to the component switching with the skeleton. I prefer the Airbnb method as it makes life easier and you don't see any layout shifts.
21. Sort - Sort uses DND kit to make things sortable, originally it was used to sort uploaded images but you can use it for anything. It's what I wish Airbnb did for the image upload section of their site.
22. Upload - I used to use Filepond, however I just made a custom component that uses the native file input. It's a lot simpler and easier to use. It's also a lot more flexible. It's better than filepond to some degree because it doesn't have a boat load of CSS.
23. Warning - It's like error but for warnings. Actually error is built on top of warning. The more ya know.
24. Wizard - Wizard is a modified version of [`react-use-wizard`](https://github.com/devrnt/react-use-wizard#readme). When I originally used the package I needed some more flexibility so I just cloned the repo and plopped it in here. If you ever get the chance check out devrnt's work, he has another package called [`react-use-intercom`](https://github.com/devrnt/react-use-intercom) and I really like it!

## Hooks

1. useGeoLocation - A hook that gets the users geolocation. Used with the Address component.
2. useWindowScroll - A hook that gets the users scroll position. Used with the Navigation components. Modified version of `react-use` `useWindowScroll` hook.
3. util - Utils contain `react-use` stuff and eventually other crap.

## Utils

There are a lot of utils. I'm not listing all of them, they are pretty self explanatory. I'll list the ones that are more interesting.

1. usePages - I really like use pages, it just makes pagination kinda easy.
2. setNestedObjectValues - Comes from `formik` and I like it!
3. mergeRefs - It merges refs, it makes my life easier somtimes. Don't judge me.

## What's Next?

- [ ] Add Storybooks for each component and hook.
- [ ] Add tests for each component and hook.
- [x] Add a better readme.
- [ ] Migrate to Next 13 app dir and create a skeleton Next.js app. (Waiting on Emotion changes etc)
- [ ] Cleanup tsconfigs and flesh out the eslint configs a bit more.
- [ ] Sleep.
