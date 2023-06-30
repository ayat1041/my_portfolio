import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillProgress = ({ percentage, technology, img }) => {
  return (
    <CircularProgressbarWithChildren value={percentage} styles={buildStyles({pathColor:`rgba(251, 191, 36, ${percentage / 100})`})}>

      <div className="flex flex-col items-center justify-center">
      <img
        className="w-1/3"
        src="react.png"
        alt="doge"
      />
      <h1 className="text-blue-200 text-[80%] font-bold">{technology}</h1>
      <h1 className="text-blue-200 text-[90%]">{percentage}%</h1>
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default SkillProgress;
