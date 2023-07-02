import Marquee from "react-fast-marquee";
import figmaImg from "../../../assets/figma.png";
import mongoImg from "../../../assets/mongodb.png";
import expressImg from "../../../assets/express.png";
import nodejsImg from "../../../assets/nodejs.png";
import reactImg from "../../../assets/react.png";
import bootImg from "../../../assets/bootstrap.png";
import djangoImg from "../../../assets/django.png";

const Skills_right = () => {
    return (
        <div className="w-full mt-6 bg-transparent bg-opacity-80">
        <Marquee gradient={true} gradientColor={[31, 41, 55]} gradientWidth={100}>
            <div className="h-10 lg:h-20 flex justify-center items-center">
          <img className="h-4 mx-4 drop-shadow-md" src="https://axios-http.com/assets/logo.svg" alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-16 mx-1 lg:mx-3 drop-shadow-md" src={mongoImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-16 mx-2 lg:mx-6 mr-4 lg:mr-8 drop-shadow-md" src={expressImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-20 mx-2 lg:mx-6 drop-shadow-md brightness-150" src={nodejsImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-75" src={reactImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-4 lg:h-10 mx-2 lg:mx-6 drop-shadow-md brightness-75" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-14 mx-2 lg:mx-6 drop-shadow-md brightness-110" src={bootImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md" src={djangoImg} alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-3 lg:h-8 mx-2 lg:mx-6 drop-shadow-md brightness-125" src="https://ucarecdn.com/39dea013-fbb2-486d-b16b-bf2e1cc43af3/-/resize/700/" alt="" />
            </div>
            <div className="h-10 lg:h-20 flex justify-center items-center">
            <img className="h-6 lg:h-12 mx-2 lg:mx-6 drop-shadow-md" src={figmaImg} alt="" />
            </div>



        </Marquee>
        </div>
    );
};

export default Skills_right;