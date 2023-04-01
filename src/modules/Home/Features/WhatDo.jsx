import Image from "next/image";
import whatDo from "../../../assets/wahtdo.svg";
import whatDoMob from "../../../assets/whatdoMob.svg";

const WhatDo = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto pl-9 pr-8 mt-9 mb-20 md:my-[137px]">
      <div className="lg:w-full lg:h-[693px] md:w-full md:h-[422px] hidden md:flex">
        <Image
          src={whatDo}
          alt="whatDo"
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:hidden flex w-full !h-[540px]">
        <Image
          src={whatDoMob}
          alt="whatDo"
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-black text-[32px] leading-[150%] lg:text-[56px] lg:leading-[150%] text-center bannerTitle lg:w-[1182px] w-full mt-10 lg:mt-[72px]">
        Tailor-made study materials that aids you in your journey to become an
        exam ace
      </h1>
    </div>
  );
};

export default WhatDo;
