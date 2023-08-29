# React Simple Animated Dark Mode Button

## Description

![Demo](https://github.com/irshadi/react-simple-animated-dark-mode-button/raw/master/docs/react-simple-animated-dark-mode-button-demo.gif)

`react-simple-animated-dark-mode-button` library offers a customizable and visually appealing button component that seamlessly transitions between dark mode and light mode themes. This button is designed to simplify the integration of icon-based animations, enhancing user experience and interactivity within your React applications.

## Installation

You can install the library using npm or yarn:

```sh
npm i react-simple-animated-dark-mode-button

# or

yarn add react-simple-animated-dark-mode-button
```

## Usage Example

```jsx
import { ThemeIconButton } from "react-simple-animated-dark-mode-button";

const Example = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ThemeIconButton
      isDarkMode={isDarkMode}
      onClick={() => setIsDarkMode((_isDarkMode) => !_isDarkMode)}
      color={{
        // Give your Icon desired color
        light: "#5628EE",
        dark: "rgb(238 177 40)",
      }}
    />
  );
};
```

## Props

| Name         | Type       | Default  | Description                                                |
| ------------ | ---------- | -------- | ---------------------------------------------------------- |
| `onClick`    | `function` | Required | Function to be called when the button is clicked.          |
| `isDarkMode` | `boolean`  | Required | Indicates whether the current theme mode is dark or light. |
| `color`      | `object`   | Optional | Custom colors for the icon.                                |

## Known Problems

### With Chakra UI

If you have problem with missing animation in Chakra UI try

```jsx
const [isDarkMode, setIsDarkMode] = React.useState(false);
const { toggleColorMode } = useColorMode();

<ThemeIconButton
  onClick={() => {
    toggleColorMode();
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
    }, 25);
  }}
/>;
```
