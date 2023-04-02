import Image from "next/image";
import quote from "../../../../assets/quote.svg";

const TestimonialItem = ({ data }) => {
  return (
    <div className=" flex justify-end items-center relative w-full">
      <div className="absolute top-0 left-0 w-[700px] h-[430px] mt-10 transition-all ease-in duration-700">
        <Image src={data.image} alt={data.name} width={545} height={427} />
      </div>
      <div className="bg-[#EDF9FF] justify-end pt-10 w-[745px] h-[477px] flex rounded-xl pr-[140px] transition-all ease-in duration-700">
        <div className="mr-10">
          <Image src={quote} alt="quote" />
        </div>
        <div className="">
          <h1 className="text-[#1A191B] font-primary text-2xl mb-4">
            {data.name}
          </h1>
          <p className="text-[#555867] w-[245px] font-secondary text-base mb-8 z-50">
            {data.description}
          </p>
          <button className=" font-primary cursor-pointer text-base bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-16 py-4 rounded-[8px] text-white	">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
