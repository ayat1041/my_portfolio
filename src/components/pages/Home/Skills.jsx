import Skills_right from "../../shared/Skills_right/Skills_right";
import  ObliqueRain  from  'react-rainfall-animation/src/ObliqueRain'
import "./Skills.css";
import SkillProgress from "../../shared/SkillProgress/SkillProgress";



const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 w-full relative" id="skills">
      <div className="flex flex-col h-full items-center bg-slate-800 mx-10 ml-12 lg:mx-20 pb-[65px]">
      <div className="rainfall-container" id="Rain">
        <ObliqueRain  dropletsAmount={200}  amplitude={400}  />
      </div>
      <div className=" w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-transparent to-yellow-700">
      <div className="section_heading h-full flex items-center justify-center bg-yellow-500 self-start p-4 pr-16 shadow-md">
      <h1 className="text-3xl lg:text-6xl text-slate-800">Skills</h1>
      </div>
      <h1 className="py-4 text-lg lg:text-xl text-yellow-100 drop-shadow-md font-light w-full lg:w-1/2">From my learnings so far I have gained my confidence to work with these skills. I tend to explore new technologies every now and then and always working on increasing my expertise.</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-10 py-16">
      <SkillProgress percentage={70} technology="ReactJS" />
      <SkillProgress percentage={70} technology="ReactJS" />
      <SkillProgress percentage={70} technology="ReactJS" />
      <SkillProgress percentage={70} technology="ReactJS" />
      <SkillProgress percentage={70} technology="ReactJS" />
      <SkillProgress percentage={70} technology="ReactJS" />
      </div>
      </div>
    </div>
  );
};

export default Skills;
