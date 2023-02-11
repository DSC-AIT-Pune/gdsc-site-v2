import React, { useState } from "react";
import "../styles/schedule.css";

function Schedule(props) {
  const [dates, setDates] = useState([
    {
      eventDate: "sept 2022",
      eventHeading: "Compose Camp",
      eventDescription:
        " Exclusive for SEs, in this they are taught advanced concepts of Android Development",
    },
    {
      eventDate: "Oct 2022",
      eventHeading: "HacktoberFest",
      eventDescription:
        " FE to SE are introduced with git, github, opensource contributions and hacktoberfest by digitalocean.",
    },
    {
      eventDate: "Nov 2022",
      eventHeading: "Google cloud Event",
      eventDescription:
        " FE to TE, they are introduced in the field of Cloud or Devops",
    },
    {
      eventDate: "Dec 2022",
      eventHeading: "Android Study Jams",
      eventDescription:
        " Exclusive for FEs, In this they are introduced to the field of Android Development and taught Basics of Android Development.",
    },
    {
      eventDate: "Jan 2023",
      eventHeading: "App Dev Contest 3.0",
      eventDescription:
        " A 2 week long android development competition held for the FEs where they compete among themselves to build an Android App which they are taught in Android Study Jams with certain requirements in the app.",
    },    
    {
      eventDate: "feb 2023",
      eventHeading: "Flutter Festival",
      eventDescription:
        " Exclusive for FEs, In this they are introduced to the field of App Development and taught Basics of App Development for cross platform using Flutter",
    },
    {
      eventDate: "Mar 2023",
      eventHeading: "ML with Tensorflow",
      eventDescription:
        " Exclusive for FEs, In this they are introduced to the field of Machine Learning and taught Basics of Machine Learning and Tensorflow with the help of resources provided by Google itself",
    },
    {
      eventDate: "Mar 2023",
      eventHeading: "Pre Solution Challenge Event",
      eventDescription:
        " An exclusive 24 hr hackathon for AITians (FE to TE) which will prepare AITians for Solution Challenge (a year long international competition) by Google. This will also help the students to gain knowledge and experience environment of hackathon and prepare them for such hackathons in coming months.",
    },
    {
      eventDate: "Oct 2022 to May 2023",
      eventHeading: "Speaker Session",
      eventDescription:
        " A series of sessions will be conducted by BEs, industry experts regarding the growth in tech-industry through internships, open source community and hackathons. Experience will be shared through this initative",
    },
  ]);
  return (
    <div className={"scheduleContainer"}>
      {/* <h1 className="heading">Schedule</h1>
      <hr className="hrLine" /> */}
      <div className="schedule">
        {dates.map((date, index) => {
          return (
            <div className="scheduleCard" key={index}>
              <div
                className="uperCard"
                style={
                  index % 2 != 0
                    ? props.theme === "dark"
                      ? {
                          backgroundColor: "#292929",
                          transform: "rotateX(180deg)",
                          clipPath:
                            "polygon(0% 5%, 5% 1%, 95% 1%, 100% 5%, 100% 100%, 0% 100%)",
                        }
                      : {
                          transform: "rotateX(180deg)",
                          clipPath:
                            "polygon(0% 5%, 5% 1%, 95% 1%, 100% 5%, 100% 100%, 0% 100%)",
                        }
                    : props.theme === "dark"
                    ? { backgroundColor: "#292929" }
                    : {}
                }
              >
                <div
                  className="dateCard"
                  style={
                    props.theme === "dark"
                      ? { background: "#373737", color: "white" }
                      : null
                  }
                >
                  <p className="eventDate">{date.eventDate}</p>
                  <h1>{date.eventHeading}</h1>
                  <p>{date.eventDescription}</p>
                </div>
              </div>
              <div
                className="lowerCard"
                style={
                  props.theme === "dark" ? { background: "#292929" } : null
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
