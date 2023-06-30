import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import 'animate.css';
const Social = () => {
  return (
    <div data-aos="fade-left" className="fixed z-10 w-10 lg:w-20 right-0 top-1/4 -mt-12 flex flex-col items-center justify-center gap-4 text-yellow-500">
      <FaLinkedinIn className="animate__animated animate__backInLeft text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <FaGithub className="animate__animated animate__backInLeft git text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <FaFacebook className="animate__animated animate__backInLeft facebook text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in lg:hover:text-5xl" />
      <div className="flex items-center justify-center rotate-90 mt-32">
        <div className="h-[1px] w-12 bg-yellow-500 mr-4 ml-4"></div>
        {/* <p className="text-sm text-yellow-400 tracking-[0.2em] drop-shadow-sm">
          ayat.dihan6593@gmail.com
        </p> */}
        <div className="tracking-widest">
        <TypeAnimation
        
          sequence={[
            'ayat.dihan6593@gmail.com', // Types 'One'
            4000, // Waits 1s
            '+8801784065359', // Deletes 'One' and types 'Two'
            4000, // Waits 2s
            'ayat.dihan6593@gmail.com', // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          speed={20}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "16px", display: "inline-block" }}
        />
        </div>
      </div>
    </div>
  );
};

export default Social;
