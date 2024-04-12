import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Chat from "./components/Chat";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Stream from "./components/Stream/viewer";
import Auth from "./components/Auth";
import Dashboard from "./components/Stream/steamer";
import CreateStream from "./components/Stream/steamer/CreateStream";
import SpeakerScreenContainer from "./components/Rtmp/speakerScreen/SpeakerScreenContainer";

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
              <Route path="/stream/:meetingId" element={<Stream />} />
              <Route path="/stream/create" element={<CreateStream/>} />
              <Route path="/stream/Dashboard" element={<Dashboard/>} />
              <Route path="/stream/creator/:meetingId" element={<SpeakerScreenContainer/>} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
