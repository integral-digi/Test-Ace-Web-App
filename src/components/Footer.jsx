import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ig from "../assets/IG.svg";
import yt from "../assets/YT.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  const [year, setyear] = useState();

  useEffect(() => {
    const fullYear = new Date().getFullYear();
    setyear(fullYear);
  }, []);

  return (
    <>
      <div className=" container mx-auto pl-9 pr-8 ">
        <div className="flex pt-[75px] flex-wrap justify-between items-start h-full">
          <div>
            <div className="w-[140px] h-[18px] mb-10">
              <Link href="/">
                <div className="w-full h-full">
                  <Image src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            <p className="text-[#424242] font-semibold text-base">Follow us</p>
            <div className="flex space-x-4 mt-4">
              <Image src={facebook} alt="facebook" />
              <Image src={twitter} alt="twitter" />
              <Image src={ig} alt="ig" />
              <Image src={linkedin} alt="linkedin" />
              <Image src={yt} alt="yt" />
              <Image src={github} alt="github " />
            </div>
          </div>

          <div className="flex md:gap-[100px] flex-wrap mt-[90px] lg:m-0">
            <div className="flex flex-col mr-[150px]">
              <h2 className="font-secondary text-base text-[#53616E] mb-6">
                About
              </h2>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Home</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Downloads</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Pricing</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Contact</Link>
              </span>
            </div>
            <div className="flex flex-col mr-[150px]">
              <h2 className="font-secondary text-base text-[#53616E] mb-6">
                Product
              </h2>

              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">TOEFL</Link>
              </span>

              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">IELTS</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">SAT</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">ACT</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">GRE</Link>
              </span>
            </div>
            <div className=" flex-col lg:mt-0 xl:mt-0  mt-10 flex">
              <h2 className="font-secondary text-base text-[#53616E] mb-6">
                Company
              </h2>

              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Partners </Link>{" "}
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Investors</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Partners</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">Press Kit</Link>
              </span>
              <span className=" font-secondary text-sm text-[#424242] py-2">
                <Link href="/">FAQs</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto flex justify-between items-center pl-9 pr-8">
          <h2 className="text-right font-secondary text-[13px] leading-[144px] text-[#424242]">
            © {year} Test Extraordinaire Inc. All rights reserved.
          </h2>
          <div className="flex items-center justify-between lg:w-[48%]">
            <p className="font-secondary text-[#424242] text-sm">
              hello@test-ace.com
            </p>

            <div className="md:flex hidden lg:space-x-10">
              <span className="text-right font-secondary font-normal text-[13px] leading-[14px]  text-[#424242]">
                Privacy Policy{" "}
              </span>
              <span className="text-right font-secondary font-normal text-[13px] leading-[14px]  text-[#424242]">
                Terms of Service
              </span>
              <span className="text-right font-secondary font-normal text-[13px] leading-[14px]  text-[#424242]">
                Careers
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
