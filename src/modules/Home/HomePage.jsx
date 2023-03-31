import Features from "./Features/Features";
import Hero from "./Features/Hero";
import WhatDo from "./Features/WhatDo";

const Home = () => {
  return (
    <>
      <div className="bg-[#EDF9FF] lg:h-[1024px] md:h-[813px] h-[1320px]">
        <Hero />
      </div>
      <WhatDo />
      <Features />
    </>
  );
};

export default Home;
