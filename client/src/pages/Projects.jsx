import React from "react";
import "../styles/Project.css";
import Banner from "../components/Banner";
import Adventure from "../assets/teamwork.svg";

// projects images 
import project1 from "../assets/projects/text-edit-app.png"
import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/ai4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.jpeg"
import project8 from "../assets/projects/project8.png"

function Projects() {
  const [projects, setProjects] = React.useState([
    {
      imageUrl: project5,
      projectLink: "https://uberrecommendation.southindia.cloudapp.azure.com/desktop",
      name: "Uber Suggest",
      status: "completed",
      endDate: "4/7/2021",
      domain: "Web and App",
      github: "https://github.com/The-Anton/uber-recommendation-engine",
    },
    {
      imageUrl: project6,
      projectLink: "https://play.google.com/store/apps/details?id=com.solvabit.climate",
      name: "eSustain",
      status: "completed",
      endDate: "14/12/2021",
      domain: "App Development",
      github: "https://github.com/The-Anton/eSustain",
    },
    {
      imageUrl: project1,
      projectLink: "https://text-edit-gdsc.netlify.app/",
      name: "Text-edit",
      status: "completed",
      endDate: "1/11/2022",
      domain: "Web Development",
      github: "https://github.com/DSC-AIT-Pune/Text-Edit",
    },
    {
      imageUrl: project4,
      projectLink: "https://drive.google.com/drive/folders/1ABZEsP0auHVeNxjVTHSJmtTz0I-BMAg7",
      name: "AiReceipt",
      status: "completed",
      endDate: "9/1/2022",
      domain: "App Development",
      github: "https://github.com/licofiS/AiReceipt",
    },
    {
      imageUrl: project2,
      projectLink: "https://crypto-reactapp-heyajaysingh.netlify.app/",
      name: "Cryto-app",
      status: "completed",
      endDate: "15/11/2022",
      domain: "React app",
      github: "https://github.com/ajaysinghpanwar2002/ReactProjects/tree/main/crypto-app",
    },
    {
      imageUrl: project3,
      projectLink: "https://transparency-ethindia.netlify.app",
      name: "Transparency-ethindia",
      status: "completed",
      endDate: "4/12/2022",
      domain: "Web Development",
      github: "https://github.com/Nymphalys/Transparency-ETHIndia",
    },
    {
      imageUrl: project7,
      projectLink: "https://github.com/The-Anton/soil-moisture-detection-api",
      name: "soil-moisture-detection-api",
      status: "completed",
      endDate: "24/11/2022",
      domain: "python",
      github: "https://github.com/The-Anton/soil-moisture-detection-api",
    },
    {
      imageUrl: project8,
      projectLink: "https://github.com/The-Anton/special-learning-disablility-analyser",
      name: "Saathi",
      status: "OnGoing",
      endDate: "26/8/2022",
      domain: "Web Development",
      github: "https://github.com/The-Anton/special-learning-disablility-analyser",
    },
    
  ]);
  return (
    <div className={"projectConatiner"}>
      <Banner
        image={Adventure}
        color="#6199F6"
        heading={
          "Helping communities thrive, through technology and collaboration"
        }
        subtext={
          "Building projects for communities can be a rewarding and meaningful way to make a positive impact in the world. By creating projects that address the needs and challenges of a specific community, developers can help improve the lives of others and make a meaningful difference."
        }
      />
      <div className="project-card-containers">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-cards">
              <a href={project.projectLink} target="_blank">
                <img className="projects-image" src={project.imageUrl} alt="" />
              </a>
                <p className="Project-names">{project.name}</p>
                <div className="card-footers">
                  <a className="project-domains" href={project.github} target="_blank">{project.domain}</a>
                  <p className="projects-status">{project.status}</p>
                </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
export default Projects;
