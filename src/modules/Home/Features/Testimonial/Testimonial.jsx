// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import quote from "../../../../assets/quote.svg";
import { testimonials } from "../../config/config";
import TestimonialItem from "./TestimonialItem";
// Import Swiper React components
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/swiper-bundle.css";

const Testimonial = () => {
  const [selectData, setselectData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = (event) => {
    setselectData(event);
  };

  useEffect(() => {
    const filtered = testimonials?.filter((item) => item.name === selectData);
    setFilteredData(filtered);
  }, [selectData]);

  return (
    <div className="-z-50">
      <div className="flex flex-col justify-center items-center container mx-auto pl-9 pr-8 my-[137px] ">
        <p className="text-[#1777CB] font-secondary text-2xl ">Testimonials</p>
        <h1 className="font-primary text-[32px] leading-[100%] lg:text-[56px] lg:leading-[100%] w-full text-center my-6 bannerTitle">
          Trusted by students in some of the best colleges
        </h1>
        <p className="text-[#4E4B59] font-semibold text-lg w-full lg:w-[1048px] mb-11 text-center">
          But don&apos;t just take our word for it. Our users have seen
          significant improvements in their exam scores after using our app. One
          user, Rota, saw his TOEFL score increase by 200 points after using our
          app for just 3 weeks. Imagine what our app can do for you!
        </p>
        {/* it's for desktop  */}
        <div className="lg:flex w-full hidden">
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

          <div
            className={`flex items-center relative w-full transition-all duration-500 `}
          >
            {filteredData?.length === 0 &&
              testimonials
                ?.slice(0, 1)
                ?.map((data, index) => (
                  <TestimonialItem data={data} key={index} />
                ))}

            {filteredData?.length > 0 &&
              filteredData?.map((data, index) => (
                <TestimonialItem
                  data={data}
                  key={index}
                  handleClick={handleClick}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F6FCFF] h-[870px]  lg:hidden flex justify-evenly ">
        {/* it's for mobile  */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="!shadow-none !rounded-none !h-[850px]"
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={true}
          modules={[Autoplay, Pagination]}
        >
          {testimonials?.map((data, index) => (
            <SwiperSlide
              className="z-50 absolute h-[full] w-full left-0 pl-6 pr-8 overflow-hidden mt-10 !shadow-none testimonialSlider"
              key={index}
            >
              <div className=" flex flex-col justify-center items-center w-full">
                <div className="w-[384px] h-[370px]">
                  <Image
                    src={data.imageMob}
                    alt={data.name}
                    width={384}
                    height={313}
                    className="w-full h-full contain"
                  />
                </div>

                <div className="flex mt-6 bg-transparent space-x-5">
                  <div className="w-12 h-12">
                    <Image src={quote} alt="quote" width={48} height={48} />
                  </div>

                  <div className="bg-transparent">
                    <h1 className="text-[#1A191B] font-primary text-2xl">
                      {data.name}
                    </h1>
                    <p className="text-[#555867] w-[245px] font-secondary text-base">
                      {data.description}
                    </p>
                    <button className=" font-primary cursor-pointer text-base bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-16 py-4 rounded-[8px] text-white	mt-8">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
