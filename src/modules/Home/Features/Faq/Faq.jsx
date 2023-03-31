import Image from "next/image";
import { useState } from "react";
import chatImg from "../../../../assets/chat.svg";
import { accordionsData } from "../../config/config";
import FaqItem from "./FaqItem";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="container mx-auto pl-9 pr-8 mt-[112px] mb-[66px]">
      <div className="flex justify-between">
        <div className="">
          <h1 className="bannerTitle font-primary lg:text-[56px] lg:leading-[100%] lg:w-[458px]">
            Frequently asked questions
          </h1>
          <p className="text-[#555867] font-secondary text-base mt-6 lg:w-[407px]">
            Here are some questions we get most times, if there’s something else
            you would like to know, shoot us a message.
          </p>
          <div className="mt-[100px]">
            <Image src={chatImg} alt="chatImg" />
          </div>
        </div>
        <div>
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
