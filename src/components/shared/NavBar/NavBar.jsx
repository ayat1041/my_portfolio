import { Link } from "react-router-dom";
import { RiFileDownloadFill } from "react-icons/ri";
import { MdFlashlightOn } from "react-icons/md";
import { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link as Scroll } from "react-scroll";
import "animate.css";
import signYellow from "../../../assets/sign_yellow.png";
import resume from "../../../assets/resume/MD. AL AYAT IBNA RAHMAN_Resume_.pdf";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    console.log(isDark);
  }, [isDark]);
  return (
    <div className="w-full max-w-[1900px] relative">
      <div
        data-aos="slide-down"
        data-aos-duration="500"
        className="fixed left-0 right-0 z-30"
      >
        <nav className="w-full bg-slate-700 max-w-[1900px] mx-auto relative">
          <div className="flex items-center justify-between px-4 pr-1 h-max pt-2">
            <div className="flex items-center w-[129.72px]">
              <img
                src={signYellow}
                className="w-[67px] brightness-90 p-1 rounded-sm bg-opacity-70 pr-2 border-r-[1px] border-yellow-300"
                alt=""
              />
            </div>
            {/* <MdFlashlightOn
              onClick={() => setIsDark(!isDark)}
              className={`${
                isDark ? "text-slate-400" : "text-yellow-300"
              } text-5xl rotate-180`}
            /> */}
            <div className="flex">
              <a href={resume}>
                <div className="animate__animated animate__backInLeft self-center flex bg-slate-600 p-2 items-center justify-between cursor-pointer">
                  <RiFileDownloadFill
                    className={`text-2xl text-yellow-400 mr-1`}
                  />
                  <h1 className="text-sm lg:text-xl tracking-wider font-medium text-yellow-300 uppercase">
                    Résumé
                  </h1>
                </div>
              </a>
              <div className="hidden ml-4">
                <Hamburger
                  size={24}
                  color="#e7e411"
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </div>
            </div>
          </div>
          <div className="nav_underline h-[1px] mt-1 bg-opacity-100 bg-yellow-400 mx-auto"></div>
        </nav>
        <div
          className={`shadow-md items-center shadow-yellow-200 shape flex-col hidden menu-container gap-7 max-w-full z-10 w-full mt-4 p-4 py-8 pb-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ${
            isOpen ? "open" : ""
          }`}
        >
          <Scroll
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="cursor-pointer text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium"
          >
            About
          </Scroll>
          <Link className="cursor-pointer text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
            Skills
          </Link>
          <Link className="cursor-pointer text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
            Projects
          </Link>
          <Link className="cursor-pointer text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
            Blogs
          </Link>
          <Link className="cursor-pointer text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <div className="hidden lg:flex items-center justify-between h-14 w-80 text-white">
            <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
              Skills
            </Link>
            <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
              Projects
            </Link>
            <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
              Blogs
            </Link>
            <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
              Contact
            </Link>
          </div> */
}
