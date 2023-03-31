import Faq from "./Features/Faq/Faq";
import Features from "./Features/Features";
import GettingStart from "./Features/GettingStart";
import Hero from "./Features/Hero";
import Testimonial from "./Features/Testimonial/Testimonial";
import WhatDo from "./Features/WhatDo";

const Home = () => {
  return (
    <>
      <div className="bg-[#EDF9FF] lg:h-[1024px] md:h-[813px] h-[1320px]">
        <Hero />
      </div>
      <WhatDo />
      <Features />
      <Testimonial />
      <Faq />
      <GettingStart />
    </>
  );
};

export default Home;
