import Image from "next/image";
import Link from "next/link";
import actLogo from "../../../assets/act.svg";
import greLogo from "../../../assets/gre.svg";
import iteltsLogo from "../../../assets/ielts.svg";
import joyStick from "../../../assets/joystick.svg";
import satLogo from "../../../assets/sat.svg";
import slider1 from "../../../assets/sliderImg1.svg";
import slider2 from "../../../assets/sliderImg2.svg";
import slider3 from "../../../assets/sliderImg3.svg";
import toeflLogo from "../../../assets/toefl.svg";
import toeicLogo from "../../../assets/toeic.svg";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

const Hero = () => {
  return (
    <div className="flex flex-col flex-wrap container mx-auto pl-9 pr-8">
      <div className=" w-full overflow-hidden flex justify-between items-center flex-wrap md:flex-nowrap mt-[100px] lg:mt-[170px] rounded-[12px]">
        <div className="mb-20 lg:mb-0">
          <div className=" flex items-end justify-between ">
            <h1 className=" font-primary font-bold text-5xl w-full md:w-[390px] lg:text-[82px] leading-[100%] lg:w-[780px] mt-[63px] lg:h-[246px] bannerTitle">
              Gamified learning for top performing students
              <Image
                src={joyStick}
                alt="joystick.svg"
                width={64}
                height={64}
                className="joyStick ml-5"
              />
            </h1>
          </div>
          <p className="text-[#424242] mt-6 font-secondary text-lg lg:w-[506px] w-[340px]">
            Test Ace is a mobile app that revolutionizes the way you learn! With
            our gamified learning approach, you&apos;ll not only learn faster
            but also have fun doing it.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdm4l9WiHSz_G6hbGMYv4VrzH-2cxQoaBGpGB42nPNlSleGMQ/viewform"
            target="_blank"
          >
            <button className="bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] rounded-[10px] text-[#FFFFFF] w-[229px] font-primary text-base text-center mt-6 lg:mt-14 py-4">
              {" "}
              Sign up
            </button>
          </Link>
        </div>

        <Swiper
          // slidesPerView={1.5}
          spaceBetween={30}
          className="mySwiper"
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
          breakpoints={{
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 1.5,
            },
            // when window width is <= 867px (mobile)
            867: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="">
            <Image src={slider1} alt="slider1" width="100%" height="100%" />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={slider2} alt="slider2" width="100%" height="100%" />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={slider3} alt="slider3" width="100%" height="100%" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-between items-center mt-20 mb-12 lg:mb-0 lg:mt-[120px] overflow-x-scroll overflow-y-auto space-x-[50px] lg:space-x-0 overflow-hidden scrollbar-hide">
        <Image src={satLogo} alt={satLogo} width={92} height={35} />
        <Image src={iteltsLogo} alt={iteltsLogo} width={120} height={35} />
        <Image src={toeflLogo} alt={toeflLogo} width={180} height={35} />
        <Image src={toeicLogo} alt={toeicLogo} width={170} height={35} />
        <Image src={actLogo} alt={satLogo} width={135} height={35} />
        <Image src={greLogo} alt={satLogo} width={145} height={35} />
      </div>
    </div>
  );
};

export default Hero;
