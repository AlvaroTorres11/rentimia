import { useState } from "react";

export function useThemeToogle() {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    const theme = darkTheme ? "winter" : "sunset";
    document.documentElement.setAttribute("data-theme", theme);
  };

  return { handleChangeTheme };
}
