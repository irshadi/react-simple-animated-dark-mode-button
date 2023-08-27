# React Simple Animated Dark Mode Button

## Description

![Demo](./docs/react-simple-animated-dark-mode-button-demo.gif)

`react-simple-animated-dark-mode-button` library offers a customizable and visually appealing button component that seamlessly transitions between dark mode and light mode themes. This button is designed to simplify the integration of icon-based animations, enhancing user experience and interactivity within your React applications.

## Installation

You can install the library using npm or yarn:

```sh
npm install react-animated-theme-button
# or
yarn add react-animated-theme-button
```

## Usage Example

```jsx
const Exampler = () => {
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
