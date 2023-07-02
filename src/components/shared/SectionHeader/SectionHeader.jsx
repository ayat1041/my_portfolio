const SectionHeader = ({ title, details, yellow }) => {
  // yellow = yellow || true;
  if (yellow) {
    return (
      <div className="w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-yellow-700 bg-slate-800">
        <div className="section_heading flex-grow-0 h-full flex items-center justify-center bg-slate-800 self-start p-4 pr-20 shadow-md">
          <h1 className="text-3xl lg:text-4xl text-slate-100">{title}</h1>
        </div>
        <h1 className="py-4 text-lg lg:text-xl text-yellow-100 drop-shadow-md text-right pr-2 font-light w-full lg:w-1/2">
          {details}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-transparent to-yellow-700">
        <div className="section_heading flex-grow-0 h-full flex items-center justify-center bg-yellow-500 self-start p-4 pr-20 shadow-md">
          <h1 className="text-3xl lg:text-4xl text-slate-800">{title}</h1>
        </div>
        <h1 className="py-4 text-lg lg:text-xl text-yellow-100 drop-shadow-md text-right pr-2 font-light w-full lg:w-1/2">
          {details}
        </h1>
      </div>
    );
  }
};

export default SectionHeader;
