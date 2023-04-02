import Image from "next/image";
import { useState } from "react";
import chatImg from "../../../../assets/chat.svg";
import { accordionsData } from "../../config/config";
import FaqItem from "./FaqItem";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="container mx-auto pl-9 pr-8 mt-[112px] mb-[66px]">
      <div className="flex justify-between flex-wrap">
        <div className="">
          <h1 className="bannerTitle font-primary lg:text-[56px] text-[32px] leading-[100%] lg:leading-[100%] lg:w-[458px] md:w-[395px] w-full ">
            Frequently asked questions
          </h1>
          <p className="text-[#555867] font-secondary text-base mt-6 lg:w-[407px] md:w-[508px]">
            Here are some questions we get most times, if there’s something else
            you would like to know, shoot us a message.
          </p>
          <div className="mt-[100px] hidden lg:flex">
            <Image src={chatImg} alt="chatImg" />
          </div>
        </div>
        <div className="w-full lg:w-auto">
          {accordionsData?.map((accordion, index) => (
            <FaqItem
              key={index}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              {...accordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
