import SectionHeader from "../../shared/SectionHeader/SectionHeader";

const About = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 w-full relative"
      id="about"
    >
      <div className="flex flex-col items-center bg-yellow-600 mx-10 ml-12 lg:mx-20 pb-[65px]">
        <SectionHeader
        title={'About'}
        // details={}
        yellow={true}
        >
        </SectionHeader>
        <div className="text-justify p-4 lg:p-10 text-lg font-medium text-white drop-shadow-md">
          <p>I just learned Full-Stack web development using MERN from Programming Hero. Before that I already had some experience in working with HTML,CSS, Javascript in several projects and also has some diverse knowledge about backend development in Django and Nodejs. I can easily grab new frameworks and work on it in an organized and maintainable way.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
