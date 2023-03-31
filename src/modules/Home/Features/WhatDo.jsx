import Image from "next/image";
import whatDo from "../../../assets/wahtdo.svg";

const WhatDo = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto pl-9 pr-8 my-[137px]">
      <div className="">
        <Image src={whatDo} alt="whatDo" width="100%" height="100%" />
      </div>
      <h1 className="font-black lg:text-[56px] lg:leading-[150%] text-center bannerTitle h-[168px] lg:w-[1182px] w-full mt-[72px]">
        Tailor-made study materials that aids you in your journey to become an
        exam ace
      </h1>
    </div>
  );
};

export default WhatDo;
