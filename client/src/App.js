import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  const theme = localStorage.getItem("theme");
  if (window.matchMedia && theme === null) {
    const isSystemDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isSystemDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  } else if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  return (
    <div className="min-h-screen bg-body-bg">
      <NavBar />
      <div className="flex h-[calc(100vh-50px)]">
        <SideBar />
        <div className="flex-1">
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
