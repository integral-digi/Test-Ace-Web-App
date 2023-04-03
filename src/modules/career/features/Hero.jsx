import Image from "next/image";
import careerImg1 from "../../../assets/careerImg1.svg";
import careerImg2 from "../../../assets/careerImg2.svg";
import careerImg3 from "../../../assets/careerImg3.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap container mx-auto pl-9 pr-8">
        <div className=" w-full overflow-hidden mt-[200px] ">
          <h1 className="bannerTitle lg:text-[82px] text-[42px] lg:leading-[100%] font-primary mb-6 w-full lg:text-center text-start">
            Join the Test Ace team
          </h1>
          <div className="w-full flex justify-center lg:items-center items-start">
            <p className="text-[#424242] text-lg font-secondary lg:w-[737px] w-full text-start lg:text-center">
              Help us revolutionize the way students learn and prepare for
              exams! We&apos;re a fast-growing ed-tech startup that&apos;s using
              the latest technology and gamification techniques to make studying
              more engaging, effective, and fun.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[100px] flex !ml-0 space-x-[30px] justify-between items-center mb-11">
        <Image
          src={careerImg2}
          alt="careerImg2"
          width="100%"
          height="100%"
          className="lg:contain cover lg:w-auto lg:h-auto w-full h-[320px]"
        />

        <Image
          src={careerImg1}
          alt="careerImg1"
          width={737}
          height={543}
          className="lg:contain cover lg:w-auto lg:h-auto w-full h-[320px]"
        />

        <Image
          src={careerImg3}
          alt="careerImg3"
          width="100%"
          height="100%"
          className="lg:contain cover lg:w-auto lg:h-auto w-full h-[320px]"
        />
      </div>
    </>
  );
};

export default Hero;
