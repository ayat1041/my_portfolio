import { Link } from "react-router-dom";
import { RiFileDownloadFill } from 'react-icons/ri'

const NavBar = () => {
  return (
    <nav className="w-full bg-slate-700 flex items-center justify-between px-4 h-max">
        <div className="w-[100px]">
        <img src="sign_yellow.png" className="w-[74px] brightness-90 p-1 rounded-sm bg-opacity-70" alt="" />
        </div>
      <div className="flex items-center justify-between h-14 w-80 text-white">
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
      </div>
      <div className="self-center flex bg-slate-600 p-2 w-[100px] items-center justify-between cursor-pointer">
            <RiFileDownloadFill className="text-2xl text-yellow-300"/>
            <h1 className="text-sm tracking-wider font-semibold text-yellow-300">Résumé</h1>
        </div>
    </nav>
  );
};

export default NavBar;
