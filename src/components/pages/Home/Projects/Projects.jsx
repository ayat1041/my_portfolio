import summerImg from "../../../../assets/projects/summer-sounds-academy.png";
import legoImg from "../../../../assets/projects/lego-mart.png";
import desiImg from "../../../../assets/projects/desi-eats.png";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";
import Project from "./Project";
const Projects = () => {
  const projects = [
    {
      title: "Summer Sounds Academy",
      details:
        "An online music school focused on ensuring a productive summer holiday for your kids. Learn any instruments you love with our skilled professionals.",
      features: [
        "User role specific access (student/Instructor/admin)",
        "Firebase Authentication",
        "Stripe payment method",
        "Onsite Dark/light mode",
        "JWT token authorization",
        "password validation",
      ],
      technologies: ["Reactjs","Express","Nodejs","MongoDB","Firebase","axios","JWT","Stripe"],
      live: "https://summer-sounds-academy.web.app/",
      gitClient:
        "https://github.com/ayat1041/summer-sounds-academy-client-assignment-12",
      gitServer:
        "https://github.com/ayat1041/summer-sounds-academy-server-assignment-12",
      Img: summerImg,
    },
    {
      title: "Lego Mart",
      details: "Online Lego shop with categorized collections.",
      features: [
        "User role specific access (student/admin)",
        "Firebase Authentication",
        "Full responsive site",
        "password validation",
      ],
      technologies: ["Reactjs","Express","Nodejs","MongoDB","Firebase"],
      live: "https://lego-mart.web.app/",
      gitClient: "https://github.com/ayat1041/lego-mart-client-assignment-11",
      gitServer: "https://github.com/ayat1041/lego-mart-server-assignment-11",
      Img: legoImg,
    },
    {
      title: "Desi Eats",
      details: "Online Recipe Site with the recipes from the best ever chefs of royal indian cuisine.",
      features: [
        "Firebase Authentication",
        "Full responsive site",
        "password validation",
      ],
      technologies: ["Reactjs","Express","Nodejs","MongoDB","Firebase"],
      live: "https://desi-eats-d9f96.web.app/",
      gitClient: "https://github.com/ayat1041/desi-eats-client-assignment-10",
      gitServer: "https://github.com/ayat1041/desi-eats-server-assignment-10",
      Img: desiImg,
    },
  ];
  return (
    <div
      className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 w-full relative"
      id="projects"
    >
      <div className="flex flex-col h-full items-center bg-yellow-600 mx-10 ml-12 lg:mx-20 pb-[65px]">
        <SectionHeader
          title={"Projects"}
          // details={}
          yellow={true}
        ></SectionHeader>
        {projects.map((project, index) => (
          <Project 
          key={index}
          title={project.title}
          features={project.features}
          technologies={project.technologies}
          details={project.details}
          live={project.live}
          gitClient={project.gitClient}
          gitServer={project.gitServer}
          Img={project.Img}
          ></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
