import React from "react";
import TeamImage from '../assets/team6.png'
import "../styles/Team.css"
import Banner from "../components/Banner";
import Teammembers from "../data/Teammembers";
import TeamGrids from "../components/TeamGrids";
import Freshers from "../data/Freshers";

class Team extends React.Component {

  componentDidMount() { }

  render() {
    return (
      <div className="team">
        <Banner image={TeamImage}
          color="#6199F6"
          heading={"Community that grows by embracing others"}
          subtext={"We are team of experienced developers who are interested in giving back to the community"} />
        <div>
          <div className="OurTeamHeadingmobile">
            <span style={{ fontSize: "8vh", fontWeight: "bold" }}>{"Our Team"}</span>
          </div>
          <div className="yearTimeline" >
            <div><span className="timelineItems">{"2021"}</span></div>
            <div><span className="timelineItems">{"Alumni"}</span></div>
          </div>
        </div>
        <section className="member">
          {Teammembers.map((member, ind) => {
            return (
              <TeamGrids
                key={ind}
                name={member.name}
                position={member.position}
                img={member.image_url}
                gh={member.social_profiles.gitHub}
                ig={member.social_profiles.instagram}
                fb={member.social_profiles.facebook}
                ln={member.social_profiles.linkedIn}
              />
            );
          })}
        </section>
        <div>
          <div className="OurTeamHeadingmobile">
            <span style={{ fontSize: "6vh", fontWeight: "bold" }}>{"Fresher Members"}</span>
          </div>
          <div className="yearTimeline" >
            <div><span className="timelineItems">{"2021"}</span></div>
            <div><span className="timelineItems">{"Alumni"}</span></div>
          </div>
        </div>
        <section className="member">
          {Freshers.map((member, ind) => {
            return (
              <TeamGrids
                key={ind}
                name={member.name}
                position={member.position}
                img={member.image_url}
                gh={member.social_profiles.gitHub}
                ig={member.social_profiles.instagram}
                fb={member.social_profiles.facebook}
                ln={member.social_profiles.linkedIn}
              />
            )
          })
          }
        </section>
      </div>
    )
  }
}

export default Team;