import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-red-500 flex items-center justify-between px-4">
        <img src="logo.svg" className="w-12" alt="" />
      <div className="flex items-center justify-between h-16 w-80 bg-green-400">
        <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center bg-blue-400 tracking-wider font-medium">
          Skills
        </Link>
        <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center bg-blue-400 tracking-wider font-medium">
          Projects
        </Link>
        <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center bg-blue-400 tracking-wider font-medium">
          Blogs
        </Link>
        <Link className="text-sm hover:text-lg transition-all duration-50 ease-in w-20 text-center bg-blue-400 tracking-wider font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
