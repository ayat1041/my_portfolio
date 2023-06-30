import { FaBlogger,FaInfoCircle } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import { Link as Scroll } from "react-scroll";
import "animate.css";
const SideMenu = () => {
  return (
    <div data-aos="fade-right" className="fixed z-10 w-10 lg:w-20 left-0 top-20 flex flex-col items-center justify-center gap-8 text-yellow-500">
      <Scroll to="about" smooth={true} duration={500}>
      <div className="animate__animated animate__bounceInUp about w-max flex flex-col items-center gap-2">
      <FaInfoCircle className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <p className="text-yellow-400 text-[8px]">ABOUT</p>
      </div>
      </Scroll>
      <Scroll to="skills" smooth={true} duration={500}>
      <div className="animate__animated animate__bounceInUp skills w-max flex flex-col items-center gap-2">
      <img src="skills.png" className="w-[30px] drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:w-12" />
      <p className="text-yellow-400 text-[8px]">SKILLS</p>
      </div>
      </Scroll>
      <div className="animate__animated animate__bounceInUp projects w-max flex flex-col items-center gap-2">
      <img src="projects.png" className="w-[30px] drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:w-12" />
      <p className="text-yellow-400 text-[8px]">PROJECTS</p>
      </div>
      <div className="animate__animated animate__bounceInUp blogs w-max flex flex-col items-center gap-2">
      <FaBlogger className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <p className="text-yellow-400 text-[8px]">BLOGS</p>
      </div>
      <div className="animate__animated animate__bounceInUp contact w-max flex flex-col items-center gap-2">
      <MdConnectWithoutContact className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <p className="text-yellow-400 text-[8px]">CONTACT</p>
      </div>
      <Scroll to="top" smooth={true} duration={500}>
      <div className="animate__animated animate__bounceInUp top w-max flex flex-col items-center gap-2">
      <BiArrowToTop className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <p className="text-yellow-400 text-[8px]">TOP</p>
      </div>
      </Scroll>
      
    </div>
  );
};

export default SideMenu;
