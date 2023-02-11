import React from "react";
import "../styles/Home.css";
export default function Homes(props) {
  return (
    <div className="tech-container">
      <p className="cards-title">{props.title}</p>
      <div className="cards-circles" style={{ background: `${props.color}` }}>
        <img
          className="cards-image"
          style={{ height: `${props.height}`, width: `${props.width}` }}
          src={props.imgUrl}
        />
      </div>
    </div>
  );
}
