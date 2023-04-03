import Image from "next/image";
import ceo from "../../../assets/ceoImage.svg";
import customerSerRep from "../../../assets/customerSerRepImg.svg";
import teamLeader from "../../../assets/teamleaderImage.svg";

const LifeAt = () => {
  return (
    <div className=" container mx-auto pl-9 pr-8 my-10 md:my-[137px]">
      <div className=" w-full overflow-hidden mt-[100px] lg:mt-[200px] ">
        <h1 className="bannerTitle text-[32px] leading-[150%] lg:text-[56px] lg:leading-[100%] font-primary mb-16 w-full text-center">
          Life at Test Ace
        </h1>
        <div className="w-full flex justify-center items-center">
          <p className="text-[#424242] text-lg font-secondary lg:w-[1037px] w-full  text-center">
            We offer a dynamic and collaborative work environment that
            encourages innovation, creativity, and continuous learning.
            You&apos;ll have the opportunity to work on cutting-edge
            technologies, collaborate with other talented professionals, and
            make a real impact on the lives of millions of students around the
            world.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-16 space-y-10">
        <div className="flex flex-col ">
          <div className="w-[360px] h-[355px]">
            <Image src={ceo} alt="ceo" className="w-full h-full" />
          </div>
          <h1 className="text-[#424242] font-primary text-2xl mt-10 mb-6">
            Jordan LaPalm
          </h1>
          <p className="text-[#53616E] text-lg font-secondary">
            Chief Product Officer
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-[360px] h-[355px]">
            <Image
              src={teamLeader}
              alt="teamLeader"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-[#424242] font-primary text-2xl mt-10 mb-6">
            Mary Doe
          </h1>
          <p className="text-[#53616E] text-lg font-secondary">
            Team Lead (Data)
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-[360px] h-[355px]">
            <Image
              src={customerSerRep}
              alt="customerSerRep"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-[#424242] font-primary text-2xl mt-10 mb-6">
            Jane Doe
          </h1>
          <p className="text-[#53616E] text-lg font-secondary">
            Customer Service Rep
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeAt;
