import "./Skills.css";
import SkillProgress from "../../shared/SkillProgress/SkillProgress";
import ReactImage from "../../../../public/react.png";
import mongoDBImage from "../../../../public/mongodb.png";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

const Skills = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 w-full relative"
      id="skills"
    >
      <div className="flex flex-col h-full items-center bg-slate-800 mx-10 ml-12 lg:mx-20 pb-[65px]">
        {/* <div className="w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-transparent to-yellow-700">
          <div className="section_heading flex-grow-0 h-full flex items-center justify-center bg-yellow-500 self-start p-4 pr-16 shadow-md">
            <h1 className="text-3xl lg:text-6xl text-slate-800">Skills</h1>
          </div>
          <h1 className="py-4 text-lg lg:text-xl text-yellow-100 drop-shadow-md text-right pr-2 font-light w-full lg:w-1/2">
            From my learnings so far I have gained my confidence to work with
            these skills. I tend to explore new technologies every now and then
            and always working on increasing my expertise.
          </h1>
        </div> */}
        <SectionHeader title={`skills`} details={`From my learnings so far I have gained my confidence to work with
            these skills. I tend to explore new technologies every now and then
            and always working on increasing my expertise.`}></SectionHeader>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-10 py-16"
        >
          <SkillProgress
            percentage={90}
            technology="Tailwind CSS"
            img={"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"}
          />
          <SkillProgress
            percentage={70}
            technology="ReactJS"
            img={ReactImage}
          />
          <SkillProgress
            percentage={60}
            technology="MongoDB"
            img={mongoDBImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
