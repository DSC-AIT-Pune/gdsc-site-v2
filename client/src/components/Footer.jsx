import React from "react";
import "../styles/components/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
export default function Footer(props) {
  const links = {
    instagram: "https://www.instagram.com/gdsc_aitpune/",
    facebook: "https://www.facebook.com/dsc.aitpune/",
    github: "https://github.com/DSC-AIT-Pune",
    linkedIn: "https://in.linkedin.com/company/gdsc-aitpune",
  };
  return (
    <div
      className="footer-container"
      style={props.theme === "dark" ? { backgroundColor: "#E0F7FF" } : {}}
    >
      <div className="footer-content">
        <div className="thanking">
          <p style={props.theme === "dark" ? { color: "#17212B" } : {}}>
            GDSC AIT
          </p>
          <p style={props.theme === "dark" ? { color: "#17212B" } : {}}>
            made with love : )
          </p>
        </div>
        <div className="social-links">
          <a href={links.facebook}>
            <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e" alt="link" />
          </a>
          <a href={links.linkedIn}>
            <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Flinkedin.svg?alt=media&token=d6134ca9-6f46-4ee8-b9c5-568eccbc4a22" alt="link" />
          </a>
          <a href={links.github}>
            <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Fgithub.svg?alt=media&token=1553097d-33d0-4fa2-a898-ab55ecc86960" alt="link" />
          </a>
          <a href={links.instagram}>
            <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Finstagram.svg?alt=media&token=fdc20d42-99d1-4a27-9674-61ff35703c8b" alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
}
