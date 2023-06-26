import { Link } from "react-router-dom";
import { RiFileDownloadFill } from "react-icons/ri";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div data-aos="fade-up"
    data-aos-duration="500" className="fixed left-0 right-0">
      <nav className="w-full bg-slate-700 ">
        <div className="flex items-center justify-between px-4 h-max pt-2">
          <div className="w-[100px]">
            <img
              src="sign_yellow.png"
              className="w-[74px] brightness-90 p-1 rounded-sm bg-opacity-70"
              alt=""
            />
          </div>
          {/* <div className="hidden lg:flex items-center justify-between h-14 w-80 text-white">
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
          </div> */}
          <div className="flex">
            <div className="self-center flex bg-slate-600 p-2 mr-3 items-center justify-between cursor-pointer">
              <RiFileDownloadFill className="text-2xl text-yellow-300 mr-2" />
              <h1 className="text-sm tracking-widest font-medium text-yellow-300">
                Download Résumé
              </h1>
            </div>
            <Hamburger
              size={24}
              color="#e7e411"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      <div className="nav_underline h-[1px] mt-1 bg-opacity-100 bg-yellow-400 mx-auto"></div>
      </nav>
      <div
        className={`shape flex-col hidden menu-container gap-7 max-w-full z-10 w-screen mt-0 p-4 py-8 pb-24 bg-gradient-to-r from-yellow-500 to-slate-700 ${
          isOpen ? 'open' : ''
        }`}
      >
        <Link className="text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
          Skills
        </Link>
        <Link className="text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
          Projects
        </Link>
        <Link className="text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
          Blogs
        </Link>
        <Link className="text-2xl hover:text-lg transition-all duration-50 ease-in w-20 text-center tracking-wider font-medium">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
