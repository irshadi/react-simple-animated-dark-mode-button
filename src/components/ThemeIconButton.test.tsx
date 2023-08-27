import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeIconButton } from "./index";
import { ThemeIconColorInterface } from "./interfaces";
import { render, cleanup, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface ThemeIconButtonTestWrapperInterface {
  color: ThemeIconColorInterface;
  onClick?: () => void;
}

const TestWrapper = (config: ThemeIconButtonTestWrapperInterface) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleDefaultOnClick = () =>
    setIsDarkMode((_isDarkMode) => !_isDarkMode);

  return (
    <ThemeIconButton
      onClick={config?.onClick || handleDefaultOnClick}
      isDarkMode={isDarkMode}
      color={{
        dark: config.color.dark || "#718096",
        light: config.color.light || "#5628EE",
      }}
    />
  );
};

describe("Test: Theme Icon Button", () => {
  afterEach(() => {
    // Clear testing data after each test run
    cleanup();
  });

  it("Should be match with prop data type", async () => {
    render(<TestWrapper color={{ dark: "#718096", light: "#5628EE" }} />);

    const buttonStyleChecker: string =
      "opacity: 0.75; position: relative; border-radius: 4px; width: 40px; height: 25px; display: flex; align-items: center; justify-content: center; transition: opacity 0.3s ease; outline: none; background: none; cursor: pointer; padding: 0px;";

    const buttonElement = await screen.findByRole("button");
    expect(buttonElement.getAttribute("title")).toBe("Button Dark Mode");
    expect(buttonElement.getAttribute("aria-label")).toBe("Button Icon Sun");
    expect(buttonElement.getAttribute("type")).toBe("button");
    expect(buttonElement.getAttribute("style")).toEqual(buttonStyleChecker);
  });

  it("Should be able to toggle between dark & light mode", async () => {
    const mockOnClick = vi.fn();
    const user = userEvent.setup();
    render(
      <TestWrapper
        color={{ dark: "#718096", light: "#5628EE" }}
        onClick={mockOnClick}
      />
    );
    const buttonElement = await screen.findByRole("button");

    await user.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Should be able to render the correct styling when toggle between light and dark mode", async () => {
    const user = userEvent.setup();
    render(<TestWrapper color={{ dark: "#718096", light: "#5628EE" }} />);

    // Test Styling for Light Mode (on Light Mode: Moon was Rendered)
    const buttonElement = await screen.findByRole("button");
    let iconElementWrapper = await within(buttonElement).findByTestId("icw");

    expect(iconElementWrapper.getAttribute("style")).toEqual(
      "position: relative; width: 24px; height: 24px; border-radius: 50%; transition: all 0.45s ease; border: transparent; background-color: transparent; transform: scale(1); overflow: hidden; box-shadow: inset 9px -9px 0px 0px #5628EE;"
    );

    const iconMoonLightMode = await within(iconElementWrapper).findByTestId(
      "icd"
    );
    const iconSunLightMode = await within(iconElementWrapper).findByTestId(
      "icl"
    );

    expect(iconMoonLightMode.getAttribute("style")).toEqual(
      `content: ""; height: inherit; width: inherit; border-radius: inherit; position: absolute; right: -9px; top: -9px; transition: transform 0.45s ease; transform: translate(0, 0); opacity: 1;`
    );
    expect(iconSunLightMode.getAttribute("style")).toEqual(
      `content: ""; width: 8px; height: 8px; border-radius: 50%; position: absolute; margin: -4px 0px 0px -4px; top: 50%; left: 50%; box-shadow: 0 -23px 0 #718096, 0 23px 0 #718096, 23px 0 0 #718096, -23px 0 0 #718096, 15px 15px 0 #718096, -15px 15px 0 #718096, 15px -15px 0 #718096, -15px -15px 0 #718096; transform: scale(0); transition: all 0.35s ease;`
    );

    // Emable Dark Mode
    await user.click(buttonElement);

    // Test Styling for Dark Mode (on Dark Mode: Sun was Rendered)
    iconElementWrapper = await within(buttonElement).findByTestId("icw");

    expect(iconElementWrapper.getAttribute("style")).toEqual(
      "position: relative; width: 24px; height: 24px; border-radius: 50%; transition: all 0.45s ease; background-color: rgb(113, 128, 150); transform: scale(0.55); overflow: visible; box-shadow: none; border: #718096;"
    );

    const iconMoonDarkMode = await within(iconElementWrapper).findByTestId(
      "icd"
    );
    const iconSunDarkMode = await within(iconElementWrapper).findByTestId(
      "icl"
    );

    expect(iconMoonDarkMode.getAttribute("style")).toEqual(
      `content: ""; height: inherit; width: inherit; border-radius: inherit; position: absolute; right: -9px; top: -9px; transition: transform 0.45s ease; transform: translate(14px, -14px); opacity: 0; border: 2px solid #718096;`
    );
    expect(iconSunDarkMode.getAttribute("style")).toEqual(
      `content: ""; width: 8px; height: 8px; border-radius: 50%; position: absolute; margin: -4px 0px 0px -4px; top: 50%; left: 50%; box-shadow: 0 -23px 0 #718096, 0 23px 0 #718096, 23px 0 0 #718096, -23px 0 0 #718096, 15px 15px 0 #718096, -15px 15px 0 #718096, 15px -15px 0 #718096, -15px -15px 0 #718096; transform: scale(1); transition: all 0.35s ease;`
    );
  });
});
