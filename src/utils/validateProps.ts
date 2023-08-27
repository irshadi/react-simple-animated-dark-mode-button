import { ThemeIconButtonInterface } from "../components/interfaces";

export const validateProps = ({
  onClick,
  isDarkMode,
  color,
}: ThemeIconButtonInterface) => {
  if (typeof onClick !== "function") {
    throw new Error(`onClick should be a function`);
  }

  if (typeof isDarkMode !== "boolean") {
    throw new Error(`isDarkMode should be a boolean.`);
  }

  if (typeof color !== "object" || color === null) {
    throw new Error(`color should be an object.`);
  }

  return true;
};
