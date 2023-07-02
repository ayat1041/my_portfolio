import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CustomScroll from 'react-custom-scroll';
import "./Project.css";


const Project = ({ title, details, technologies, live, gitClient, gitServer, Img, features }) => {
  const [detailsModal,setDetailsModal] = useState(false);

  useEffect(()=>{
    console.log(detailsModal);
  },[detailsModal])
  return (
    <>
    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 py-10">
      <div data-aos="slide-up" className="project_img w-full p-10 lg:w-full max-h-[400px] overflow-y-scroll rounded-lg">
        <img
          src={Img}
          className="w-full transition-all duration-500 rounded-md border-4 border-yellow-500"
          alt="summer_sounds_academy"
        />
      </div>
      <div data-aos="slide-up" className="w-full lg:w-full flex flex-col items-end p-4 lg:p-10 text-white drop-shadow-md text-justify">
        <h1 className="my-4 text-xl lg:text-4xl font-medium lg:font-bold drop-shadow-md">
          {title}
        </h1>
        {details}
        <div className="collapse mt-1">
          <input type="checkbox" onClick={()=>setDetailsModal(!detailsModal)} />
          <div className="collapse-title text-xl font-medium text-right p-0">
            <button className="btn btn-warning btn-sm rounded-3xl">
              {
                detailsModal ? <AiOutlineClose className="text-2xl text-white drop-shadow-md"/> : "See Details" 
              }
              </button>
          </div>
          <div className="collapse-content text-right">
            <div className="p-4 bg-yellow-500 rounded-xl">
            <button className="btn btn-success shadow-md btn-sm rounded-3xl mb-4" id="features">Features</button>
            {
              features.map((feature,index)=><p key={index} className="drop-shadow-md"> - {feature}</p>)
            }
            <button className="btn btn-success shadow-md btn-sm rounded-3xl mb-4 mt-4">Technologies</button>
            <div className="flex flex-wrap"></div>
            {
              technologies.map((technology,index)=><button className="btn btn-xs mx-1 my-1" key={index}>{technology}</button>)
            }
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-4 lg:mt-8">
          <a target="_blank" href={live} className="btn uppercase text">
            Visit site
          </a>
          <div className="flex items-center gap-2">
            <FaGithub className="text-4xl" />
            <a
              target="_blank"
              href={gitClient}
              className="font-bold cursor-pointer transition-all duration-150 ease-in hover:text-lg"
            >
              CLIENT
            </a>
            <div className="w-[1px] h-8 bg-yellow-100"></div>
            <a
              target="_blank"
              href={gitServer}
              className="font-bold cursor-pointer transition-all duration-150 ease-in hover:text-lg"
            >
              SERVER
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="divider mx-10"></div>
    </>
  );
};

export default Project;
