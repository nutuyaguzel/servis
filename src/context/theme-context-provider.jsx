import { createContext, useState } from "react"; // *context in amacı küçük dataları tutup
//kendi child componentlerine bu datayı ulaştırmak

export const ThemeContext = createContext({});

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");
  
  const contextValue = {
    theme,
    setTheme,
    toogleTheme: () => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
