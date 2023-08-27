import { buttonStyles } from "../styles/base";
import { validateProps } from "../utils/validateProps";
import { ThemeIconButtonInterface } from "./interfaces";

const DEFAULT_DARK = "#FFF";
const DEFAULT_LIGHT = "#222";

export const ThemeIconButton = ({
  onClick,
  isDarkMode,
  color,
}: ThemeIconButtonInterface) => {
  const {
    dark: buttonColorModeDark = DEFAULT_DARK,
    light: buttonColorModeLight = DEFAULT_LIGHT,
  } = color;

  const isPropsValid: boolean = validateProps({
    onClick,
    isDarkMode,
    color,
  });

  if (!isPropsValid) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={isDarkMode ? `Button Icon Moon` : `Button Icon Sun`}
      title={isDarkMode ? `Button Light Mode` : `Button Dark Mode`}
      style={buttonStyles}
    >
      <div
        data-testid="icw"
        style={{
          position: "relative",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          transition: "all 0.45s ease",
          border: isDarkMode ? buttonColorModeDark : "transparent",
          backgroundColor: isDarkMode ? buttonColorModeDark : "transparent",
          transform: isDarkMode ? "scale(0.55)" : "scale(1)",
          overflow: isDarkMode ? "visible" : "hidden",
          boxShadow: isDarkMode
            ? "none"
            : `inset 9px -9px 0px 0px ${buttonColorModeLight}`,
        }}
      >
        <div
          data-testid="icd"
          style={{
            content: `""`,
            height: "inherit",
            width: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            right: "-9px",
            top: "-9px",
            transition: "transform 0.45s ease",
            border: isDarkMode ? `2px solid ${buttonColorModeDark}` : "none",
            transform: isDarkMode
              ? "translate(14px, -14px)"
              : "translate(0, 0)",
            opacity: isDarkMode ? 0 : 1,
          }}
        />
        <div
          data-testid="icl"
          style={{
            content: `""`,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            position: "absolute",
            margin: "-4px 0 0 -4px",
            top: "50%",
            left: "50%",
            boxShadow: `0 -23px 0 ${buttonColorModeDark}, 0 23px 0 ${buttonColorModeDark}, 23px 0 0 ${buttonColorModeDark}, -23px 0 0 ${buttonColorModeDark}, 15px 15px 0 ${buttonColorModeDark}, -15px 15px 0 ${buttonColorModeDark}, 15px -15px 0 ${buttonColorModeDark}, -15px -15px 0 ${buttonColorModeDark}`,
            transform: isDarkMode ? "scale(1)" : "scale(0)",
            transition: "all 0.35s ease",
          }}
        />
      </div>
    </button>
  );
};
