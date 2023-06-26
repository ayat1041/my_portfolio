import { FaLinkedinIn,FaGithub,FaFacebook } from "react-icons/fa"

const Social = () => {
    return (
        <div className="fixed z-10 w-20 right-0 top-1/2 -mt-8 flex flex-col items-center justify-center gap-4 text-yellow-500">
            <FaLinkedinIn className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in hover:text-5xl"/>
            <FaGithub className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in hover:text-5xl"/>
            <FaFacebook className="text-3xl drop-shadow-md cursor-pointer transition-all duration-150 ease-in hover:text-5xl"/>
        </div>
    );
};

export default Social;