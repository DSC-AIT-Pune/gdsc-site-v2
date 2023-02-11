import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, createContext, useEffect, useContext } from "react";
import { Home, Contact, Programs, Projects, Schedule, Team } from "./pages/";
import { Footer, Navbar, MobileNavabar, ToggleButtons } from "./components/";
import "./styles/Global.css";
import { GlobeConfig, ThemeContext } from "./context";
import light from "./assets/globe/light.png";
import Spinner from "./components/Spinner";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleConfig } = useContext(GlobeConfig);
  console.log(theme);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div id={theme}>
      {
        loading ?
          <div className="SpinnerBeforeLoading">
          <Spinner/>
          </div>
          :
          <Router>
            <Navbar theme={theme} />
            <ToggleButtons
              // onClick={() => {
              //   if (theme === "dark") {
              //     toggleConfig({
              //       mode: "light",
              //       image: light,
              //       pixel: "#000",
              //     });
              //   } else {
              //     toggleConfig({
              //       mode: "dark",
              //       image:
              //         "https://unpkg.com/three-globe@2.24.8/example/img/earth-dark.jpg",
              //       pixel: "#fff",
              //     });
              //   }
              // }}
              onChange={() => {
                toggleTheme();
              }}
              checked={theme === "dark"}
            />
            <div className="routeContainer">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/Programs" element={<Programs />}></Route>
                <Route path="/project" element={<Projects />}></Route>
                <Route
                  path="/schedule"
                  element={<Schedule theme={theme} />}
                ></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route
                  path="/Mobile"
                  element={<MobileNavabar theme={theme} />}
                ></Route>
              </Routes>
            </div>
            <Footer theme={theme} />
          </Router>
      }
    </div>
  );
}

export default App;
