export interface ThemeIconColorInterface {
  dark: string;
  light: string;
}

export interface ThemeIconButtonInterface {
  onClick: () => void;
  color: ThemeIconColorInterface;
  isDarkMode: boolean;
}
