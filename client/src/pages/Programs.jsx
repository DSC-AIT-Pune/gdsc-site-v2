import React from "react";
import Adventure from "../assets/teamwork.svg";
import Banner from "../components/Banner";
import ExpandedLayout from "../components/Programs.jsx";
import Program from "../data/program.jsx";

const MajorEvents = Program.map((event, ind) => {
  return (
    <ExpandedLayout
      id={ind}
      img={event.img}
      text={event.desc}
      heading={event.name}
      url={event.url}
    />
  );
});

class Programs extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Banner
          image={Adventure}
          color="#6199F6"
          heading={"Accelerate your career, with google programs"}
          subtext={
            "Participate in a variety of programs to learn from, work with, and grow alongside industry experts and leaders. We are here to help you achieve your goal of making a difference in the world."
          }
        />
        <section className="programsConatiner">{MajorEvents}</section>
      </div>
    );
  }
}

export default Programs;