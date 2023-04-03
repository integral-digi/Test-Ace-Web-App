import Hero from "./features/Hero";
import LifeAt from "./features/LifeAt";
import Pitch from "./features/Pitch";
import Positions from "./features/Positions";

const CareerPage = () => {
  return (
    <>
      <div className="bg-[#EDF9FF] lg:h-[1064px] md:h-[813px] overflow-x-scroll overflow-y-auto space-x-[50px] lg:space-x-0 lg:overflow-hidden scrollbar-hide">
        <Hero />
      </div>
      <Pitch />
      <LifeAt />
      <Positions />
    </>
  );
};

export default CareerPage;
