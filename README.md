# The Contacto Material Style Guide

This is a comprehensive collection of all UI components that are used in the contacto console application. This is developed based on the [style guide](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106) provided by the design team. These components can be further extended into other apps by just modifying the CSS variable list. This collection almost has all
required components to build a standard application. On each component you will find different stories, which are different states of the UI component.
Buliding them here makes it easy to develop hard-to-reach states. These **stories** are different states of a component which can be independantly developed and tested and finally consumed without flaws.

## How to use?

1. Install the component package `npm install @contacto-io/material-style-guide`
2. Import the component that is required - ```import { Button } from '@contacto-io/material-style-guide'```
3. Visit the particular component page on the storybook app.
4. Navigate to your required story.
5. Copy the code and modify the `props` as required.
6. Since all the components are wrapper components upon Material UI, please visit [material docs](https://ant.design/components/overview/) for additional information.

## Technical Requirements

#### Dependencies

For the compoenents to work properly, make sure the consumer project has these dependencies installed. The following are the peer dependencies for this component library.

```json
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "prop-types": "^15.7.2",
    "@material-ui/core": "^4.9.3",
  }
```

#### CSS variables

This style guide completely depends on CSS variables that are commonly defined by the design team. Make sure that the variables are included on the top for the style guide to work properly.
- [CSS Variable list](https://samuellawerentz.github.io/style-guide/?path=/story/colors-css-variable-list--page)

#### Icons

The icons used are taken from the google icon package. So for icons to work properly, make sure google font for material Icons is loaded properly.

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');
```

## Useful Links

- Design Style Guide
  - Components - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106
  - Spacing - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=809%3A179
  - Typography and Colors - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=0%3A1
  - Logo and Favicon - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=819%3A179
- Style Guide Package - https://github.com/contacto-io/contacto-console/packages/915367
- Component Library live demo - https://samuellawerentz.github.io/style-guide/