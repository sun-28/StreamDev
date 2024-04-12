import { useState, createContext } from "react";

export const AppContext = createContext({});

export default function AppProvider({ children }) {
  const theme = localStorage.getItem("theme");
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleTheme() {
    const docEl = document.documentElement;

    if (docEl.classList.contains("dark")) {
      docEl.classList.remove("dark");
      setIsDarkTheme(false);
      localStorage.setItem("theme", "light");
    } else {
      docEl.classList.add("dark");
      setIsDarkTheme(true);
      localStorage.setItem("theme", "dark");
    }
  }

  const toggleSidebar = () => setIsSidebarOpen((current) => !current);

  const [formData, setFormData] = useState({name: "",password: "",email: "",phone:""});

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        isSidebarOpen,
        toggleSidebar,
        formData,
        setFormData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
