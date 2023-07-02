import { TypeAnimation } from "react-type-animation";
import { Link as Scroll } from "react-scroll";
import 'animate.css';
import Skills_right from "../../shared/Skills_right/Skills_right";
import profileCasual from "../../../assets/profile_more_casual.png"
import goDown from "../../../assets/go_down.png"

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 min-h-screen w-full relative">
      <div className="flex flex-col items-center bg-slate-800 mx-10 ml-12 lg:mx-20 py-[65px] lg:min-h-screen">

        <img
          src={profileCasual}
          className="animate__animated animate__backInDown w-60 border-8 mt-6 rounded-full mx-auto"
          alt=""
        />
        <h1 className="animate__animated animate__zoomInUp mt-4 text-3xl lg:text-4xl text-yellow-300 font-medium text-center">
          Hey There! I'm  
          <span className="font-semibold ml-2 text-red-500">
             Ayat Rahman<span className="animate-pulse">.</span>
          </span>
        </h1>
        <div className="text-xl lg:text-2xl mt-2">
          <TypeAnimation
            sequence={[
              "I'm a MERN Developer",
              2000, // Waits 1s
              "I'm a Musician", // Deletes 'One' and types 'Two'
              2000,
              // "I'm a Foodie Cook", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            speed={40}
            cursor={true}
            repeat={Infinity}
            style={{
              //   fontSize: "28px",
              fontWeight: "normal",
              color: "#ffd319",
              display: "inline-block",
            }}
          />
        </div>
        <Skills_right></Skills_right>
        <Scroll to="about" smooth={true} duration={500} offset={-50}>
          <div className="flex flex-col items-center mt-6 cursor-pointer">
            <img src={goDown} className="opacity-50 animate-ping" alt="" />
            <img src={goDown} className="-mt-8 w-[40px]" alt="" />
          </div>
        </Scroll>
      </div>
    </div>
  );
};

export default Banner;
