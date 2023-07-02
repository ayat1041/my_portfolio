import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";

const SkillProgress = ({ percentage, technology, img,height }) => {
  return (
    <ProgressProvider valueStart={0} valueEnd={percentage}>
      {(value) => (
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            pathColor: `rgba(255, 213, 0, ${value / 100})`,
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 2,
            trailColor: "rgb(0,0,0,0)",
          })}
          strokeWidth={3}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="h-10 mb-2">
            <img className="h-10 max-w-[401px]" src={img} alt="doge" />
            </div>
            <h1 className="text-blue-200 text-[100%] font-bold">
              {technology}
            </h1>
            <h1 className="text-blue-200 text-[100%]">{percentage}%</h1>
          </div>
        </CircularProgressbarWithChildren>
      )}
    </ProgressProvider>
  );
};

export default SkillProgress;
