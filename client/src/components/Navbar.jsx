import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
// desktop/laptop Navbar
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
// tab/mobile Navbar
import Home from "../assets/navbar/Default.png";
import Team from "../assets/navbar/Team.svg";
import Homes from "../assets/navbar/Homes.svg";
import Achievements from "../assets/navbar/Achievements.svg";
import Events from "../assets/navbar/Events.svg";
import Project from "../assets/navbar/Project.svg";
import downarrow from "../assets/navbar/downarrow.svg";
import uparrow from "../assets/navbar/uparrow.svg";
import "../styles/components/MobileNavbar.css";
// dark mobile navbar
import DarkAchievements from "../assets/navbar/DarkAchievements.svg";
import DarkEvents from "../assets/navbar/DarkEvents.svg";
import DarkHomes from "../assets/navbar/DarkHome.svg";
import DarkProject from "../assets/navbar/DarkProject.svg";
import DarkTeam from "../assets/navbar/DarkTeam.svg";
import DarkDefault from "../assets/navbar/DarkDefault.svg";
export default function Navbar(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const [showIcons, setShowIcons] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      {isDesktopOrLaptop ? (
        <div className="navbar-container">
          <div className="navbar">
            <div className="logo-container">
              <img src={logo} className="logo" />
              <p className="title">GDSC AIT</p>
            </div>
            <div className="links-container">
              <Link
                to="/"
                className={
                  activeLink === "/" ? `activeRoute navbar-link` : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/");
                }}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className={
                  activeLink === "/contact"
                    ? `activeRoute navbar-link`
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/contact");
                }}
              >
                Contact
              </Link>
              <Link
                to="/programs"
                className={
                  activeLink === "/programs"
                    ? `activeRoute navbar-link`
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/programs");
                }}
              >
                Programs
              </Link>
              <Link
                to="/project"
                className={
                  activeLink === "/project"
                    ? `activeRoute navbar-link`
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/project");
                }}
              >
                Project
              </Link>
              <Link
                to="/schedule"
                className={
                  activeLink === "/schedule"
                    ? `activeRoute navbar-link`
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/schedule");
                }}
              >
                Schedule
              </Link>
              <Link
                to="/team"
                className={
                  activeLink === "/team"
                    ? `activeRoute navbar-link`
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink("/team");
                }}
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="HomeButton">
          {showIcons && (
            <div className="Navigation-button">
              <button
                className="NavButtonIcon"
                onClick={() => {
                  setShowIcons(!showIcons);
                }}
              >
                <img src={downarrow} alt="" height="40px" width="20px" />
              </button>
              <button className="NavButtonIcon">
                <Link to="/team" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Team} alt="" height="40px" />
                  ) : (
                    <img src={DarkTeam} alt="" height="40px" />
                  )}
                </Link>
              </button>
              <button className="NavButtonIcon">
                <Link to="/schedule" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Achievements} alt="" height="40px" />
                  ) : (
                    <img src={DarkAchievements} alt="" height="40px" />
                  )}
                </Link>
              </button>
              <button className="NavButtonIcon">
                <Link to="/" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Homes} alt="" height="40px" />
                  ) : (
                    <img src={DarkHomes} alt="" height="40px" />
                  )}
                </Link>
              </button>
              <button className="NavButtonIcon">
                <Link to="/programs" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Events} alt="" height="40px" />
                  ) : (
                    <img src={DarkEvents} alt="" height="40px" />
                  )}
                </Link>
              </button>
              <button className="NavButtonIcon">
                <Link to="/project" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Project} alt="" height="40px" />
                  ) : (
                    <img src={DarkProject} alt="" height="40px" />
                  )}
                </Link>
              </button>
            </div>
          )}
          {!showIcons && (
            <button
              className="NavButtonIcon"
              onClick={() => {
                setShowIcons(!showIcons);
              }}
            >
              <img src={uparrow} alt="" height="40px" width="20px" />
            </button>
          )}
          <button
            className="NavButtonIcon"
            onClick={() => {
              setShowIcons(!showIcons);
            }}
          >
            {`${props.theme}` === `light` ? (
              <img src={Home} alt="" height="60px" />
            ) : (
              <img src={DarkDefault} alt="" height="60px" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
