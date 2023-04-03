import Image from "next/image";
import leftArrow from "../../../assets/bi_arrow-left.svg";
import pitchImg from "../../../assets/ourPitch.svg";

const Pitch = () => {
  return (
    <div className=" container mx-auto pl-9 pr-8 my-10 md:my-[137px]">
      <div className="flex justify-between items-start w-full flex-wrap space-x-[25px]">
        <div className="lg:w-[755px] w-[392px] h-[532px]">
          <Image
            src={pitchImg}
            alt="pitchImg"
            width="100%"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:mt-0 mt-10 p-0 !ml-0">
          <p className="font-secondary lg:text-2xl text-lg text-[#1777CB] mb-2">
            Our pitch
          </p>
          <h1 className="font-primary lg:text-[56px] text-[30px] leading-[150%] lg:leading-[150%] lg:mb-10 mb-6 bannerTitle lg:w-[681px] w-full">
            the gamified learning platform that helps you become an ace at exams
          </h1>
          <p className="text-[#424242] font-secondary text-base w-full lg:w-[652px]">
            At Test Ace, we believe that everyone has the potential to be an ace
            at exams like TOEFL Reading, IELTS Listening, SAT Maths, and more.
            That&apos;s why we&apos;re building a team of passionate, talented,
            and driven individuals who share our vision and are ready to make a
            difference in the world.
          </p>
          <button className="text-[#2C5282] font-semibold text-lg px-4 py-3 flex items-center justify-between mt-6 lg:mt-12 rounded-[5px] w-[170px] relative before:-z-50 before:block before:-inset-1 before:w-[50%] before:bg-[#F6FCFF] before:absolute before:top-0 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:w-[100%] before:rounded-[5px]">
            Learn More
            <Image src={leftArrow} alt="leftArrow" className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
