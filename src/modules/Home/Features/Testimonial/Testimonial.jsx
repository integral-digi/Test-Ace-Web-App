import { useState } from "react";
import { testimonials } from "../../config/config";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  const [selectData, setselectData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = (event) => {
    setselectData(event);
    const filtered = testimonials.filter((item) => item.name === event);
    setFilteredData(filtered);
  };

  console.log(selectData);

  // console.log(testimonials?.filter((data) => data.name !== selectData));

  return (
    <div className="flex flex-col justify-center items-center container mx-auto pl-9 pr-8 my-[137px] ">
      <p className="text-[#1777CB] font-secondary text-2xl ">Testimonials</p>
      <h1 className="font-primary lg:text-[56px] lg:leading-[100%] w-full text-center my-6 bannerTitle">
        Trusted by students in some of the best colleges
      </h1>
      <p className="text-[#4E4B59] font-semibold text-lg lg:w-[1048px] mb-11 text-center">
        But don&apos;t just take our word for it. Our users have seen
        significant improvements in their exam scores after using our app. One
        user, Rota, saw his TOEFL score increase by 200 points after using our
        app for just 3 weeks. Imagine what our app can do for you!
      </p>

      <div className="flex  w-full ">
        <div className="w-[308px] shadow-[0px_40px_60px_rgba(0,0,0,0.05)] px-12 pt-[64px] h-[430px]">
          <ul className="">
            {testimonials?.map((data, index) => (
              <div
                className="flex items-center space-x-3 cursor-pointer"
                key={index}
              >
                <div
                  className={`${
                    selectData === data.name
                      ? "bg-[#1777CB] w-3 h-3"
                      : "bg-[#9EA8B9] w-[5px] h-[5px]"
                  } rounded-full `}
                ></div>
                <li
                  className={`block text-[#53616E] font-secondary text-base py-[22px] ${
                    selectData === data.name
                      ? "!text-[#1A191B] !font-primary"
                      : null
                  }`}
                  onClick={() => handleClick(data.name)}
                >
                  {data.name}
                </li>
              </div>
            ))}
          </ul>
        </div>

        {filteredData.length === 0
          ? testimonials
              .slice(0, 1)
              .map((data, index) => <TestimonialItem data={data} key={index} />)
          : filteredData?.map((data, index) => (
              <TestimonialItem
                data={data}
                key={index}
                handleClick={handleClick}
              />
            ))}
      </div>
    </div>
  );
};

export default Testimonial;
