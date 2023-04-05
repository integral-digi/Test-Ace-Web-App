import Image from "next/image";
import appStore from "../../../assets/App store.svg";
import googlePlay from "../../../assets/Google play.svg";
import featureImg3 from "../../../assets/available-loc.svg";
import leftArrow from "../../../assets/bi_arrow-left.svg";
import featureImg2 from "../../../assets/challenge-img.svg";
import featureImg1 from "../../../assets/cutting-edge-im.svg";

const Features = () => {
  return (
    <div className="flex flex-col justify-between items-center container mx-auto pl-9 pr-8 my-[137px]">
      <div className="flex justify-between items-center w-full flex-wrap">
        <div className="lg:w-[657px] lg:h-[781px]">
          <Image src={featureImg1} alt="featureImg1" width="100%" />
        </div>
        <div className="">
          <p className="font-secondary lg:text-2xl text-lg text-[#1777CB] mb-2">
            Revolutionary teaching methods
          </p>
          <h1 className="font-primary lg:text-[56px] text-[32px] leading-[150%] lg:leading-[150%] lg:mb-10 mb-6 bannerTitle lg:w-[681px]">
            Cutting-edge Artificial Intelligence technology
          </h1>
          <p className="text-[#424242] font-secondary text-lg lg:w-[652px]">
            What makes our app unique is its gamified learning experience. You
            will earn points, badges, and Practice Scores as you progress
            through the variety of gamified material. Our app also includes
            flashcards and review mode that reinforce what you have learned, and
            provide a break from the hard stuff.
          </p>
          <button className="text-[#2C5282] font-semibold text-lg px-4 py-3 flex items-center justify-between mt-6 lg:mt-12 rounded-[5px] w-[170px] relative before:-z-50 before:block before:-inset-1 before:w-[50%] before:bg-[#F6FCFF] before:absolute before:top-0 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:w-[100%] before:rounded-[5px]">
            Learn More
            <Image src={leftArrow} alt="leftArrow" className="ml-3" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-12 flex-wrap flex-col-reverse lg:flex-row">
        <div className="mt-10 lg:mb-0">
          <p className="font-secondary lg:text-2xl text-lg text-[#1777CB] mb-2">
            Excellence through competition
          </p>
          <h1 className="font-primary lg:text-[56px] text-[32px] leading-[150%] lg:leading-[150%] lg:mb-10 mb-6 bannerTitle lg:w-[681px]">
            Challenge yourself to excellence
          </h1>
          <p className="text-[#424242] font-secondary text-lg lg:w-[652px]">
            <span className="mb-10 block">
              Looking for a fun way to motivate yourself and your friends to
              study harder? Test Ace has you covered! Our app includes a unique
              challenge feature that lets you connect with friends or random
              users globally, and challenge them to see who can earn the highest
              score. Make international friends and see who wins!
            </span>

            <span>
              Our challenge feature is a great way to get matched with other
              users of your level, and keep yourself and your friends engaged
              and motivated. Plus, you will be able to provide support and
              encouragement to your friends along the way.
            </span>
          </p>
          <button className="text-[#2C5282] font-semibold text-lg px-4 py-3 flex items-center justify-between mt-6 lg:mt-12 rounded-[5px] w-[170px] relative before:-z-50 before:block before:-inset-1 before:w-[50%] before:bg-[#F6FCFF] before:absolute before:top-0 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:w-[100%] before:rounded-[5px]">
            Learn More
            <Image src={leftArrow} alt="leftArrow" className="ml-3" />
          </button>
        </div>

        <div className="lg:w-[715px] lg:h-[693px]">
          <Image src={featureImg2} alt="featureImg2" width="100%" />
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-12 flex-wrap">
        <div className="lg:w-[657px] lg:h-[559px]">
          <Image src={featureImg3} alt="featureImg3" width="100%" />
        </div>
        <div className="lg:mt-0 mt-10">
          <p className="font-secondary lg:text-2xl text-lg text-[#1777CB] mb-2">
            Learn on the go
          </p>
          <h1 className="font-primary lg:text-[56px] text-[32px] leading-[150%] lg:leading-[150%] lg:mb-10 mb-6 bannerTitle lg:w-[681px]">
            Available on your favorite app store
          </h1>
          <p className="text-[#424242] font-secondary text-lg lg:w-[652px]">
            Our app is available for download on both iOS and Android devices,
            making it easy for you to learn on the go, completely free! We also
            offer premium membership for those students who want to work hard to
            earn their high scores.
          </p>
          <div className="flex mt-12 space-x-5">
            <button>
              <Image src={appStore} alt="appStore" />
            </button>
            <button>
              <Image src={googlePlay} alt="googlePlay" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
