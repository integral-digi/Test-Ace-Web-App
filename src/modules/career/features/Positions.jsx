const Positions = () => {
  return (
    <div className=" container mx-auto pl-9 pr-8 my-10 md:my-[137px]">
      <div className=" w-full overflow-hidden ">
        <h1 className="bannerTitle text-[32px] leading-[150%] lg:text-[56px] lg:leading-[100%] font-primary mb-9 w-full text-center">
          Open Positions
        </h1>
        <div className="w-full flex justify-center items-center">
          <p className="text-[#424242] text-lg font-secondary lg:w-[1037px] w-full  text-center">
            We&apos;re always looking for exceptional talent to join our team.
            We offer competitive salaries, flexible work arrangements, and a
            comprehensive benefits package.
          </p>
        </div>
      </div>

      <select className="text-[#90979D] font-semibold text-sm px-6 py-3 border border-[#CFDADD] outline-none appearance-none apperance w-[143px] mt-9">
        <option
          value="Add Filter"
          className="text-[#90979D] font-semibold text-sm px-6 py-3"
        >
          Add Filter
        </option>
        <option
          value="Add Filter"
          className="text-[#90979D] font-semibold text-sm px-6 py-3"
        >
          Add Filter
        </option>
        <option
          value="Add Filter"
          className="text-[#90979D] font-semibold text-sm px-6 py-3"
        >
          Add Filter
        </option>
        <option
          value="Add Filter"
          className="text-[#90979D] font-semibold text-sm px-6 py-3"
        >
          Add Filter
        </option>
      </select>

      <div className=" mt-9 hidden lg:block">
        <div className="lg:pl-[60px] lg:pr-12 bg-transparent lg:h-[88px] flex flex-col lg:p-0 p-[25px_60px_25px_20px] lg:grid lg:grid-cols-[35%_20%_20%_auto] border-y border-[#F2F4F7]">
          <div className="text-[#424242] font-secondary text-lg flex  px-20 items-center">
            Job Title
          </div>
          <div className="text-[#424242] font-secondary text-lg flex  px-20 items-center">
            Department
          </div>
          <div className="text-[#424242] font-secondary text-lg flex  px-20 items-center">
            Location
          </div>
          <div className="text-[#424242] font-secondary text-lg flex justify-center items-center">
            Action
          </div>
        </div>
      </div>

      <div className="  lg:mt-0 mt-10">
        <div className="lg:pl-[60px] lg:pr-12 bg-transparent lg:h-[88px] flex flex-col lg:p-0 p-[25px_60px_25px_20px] lg:grid lg:grid-cols-[35%_20%_20%_auto] border-y border-[#F2F4F7]">
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Data entry specialists (Intern)
          </div>
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Operations
          </div>
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Remote
          </div>
          <button className="text-[#1777CB] font-secondary text-lg lg:text-center text-left py-4 lg:py-0">
            Apply here
          </button>
        </div>
        <div className=" lg:pl-[60px] lg:pr-12 bg-transparent lg:h-[88px] flex flex-col lg:p-0 p-[25px_60px_25px_20px] lg:grid lg:grid-cols-[35%_20%_20%_auto] border-y border-[#F2F4F7]">
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Data entry specialists (Intern)
          </div>
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Operations
          </div>
          <div className="text-[#424242] font-secondary text-lg flex justify-start lg:px-20 items-center py-4 lg:py-0">
            Remote
          </div>
          <button className="text-[#1777CB] font-secondary text-lg lg:text-center text-left py-4 lg:py-0">
            Apply here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Positions;
