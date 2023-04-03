import { Burger } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const styles = {
    burger: {
      "&::before, &::after, & div": {
        background: "linear-gradient(252.26deg, #771228 -0.27%, #5B1BBD 100%)",
      },
    },
  };

  return (
    <div className="absolute lg:top-14 top-32 w-full py-10 z-50">
      <div className="mx-auto container flex items-center justify-between flex-wrap lg:flex-nowrap px-9 lg:px-10">
        <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0 ">
          <Link href="/">
            <div className="flex items-center flex-shrink-0  cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          <div className="block lg:hidden ">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              styles={styles}
            />
          </div>
        </div>

        <div className="text-gray-500 order-3 w-full lg:w-auto lg:order-2">
          <div
            className={
              opened
                ? "menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[0] z-50 bg-white pb-5 transition duration-[0.4s] ease-in-out"
                : " menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[110%] transition duration-[0.4s] ease-in-out"
            }
          >
            <ul className="flex justify-between lg:space-x-[30px] 2xl:space-x-9 items-start px-9  lg:flex-row flex-col">
              <li
                className="text-[#424242]
                  lg:px-4 font-secondary text-base  lg:p-0 py-2 cursor-pointer"
              >
                Home
              </li>
              <li
                className="text-[#424242]
                 lg:px-4 font-secondary text-base lg:p-0 py-2 cursor-pointer"
              >
                Projects
              </li>
              <li
                className="text-[#424242]
                   lg:px-4 font-secondary text-base lg:p-0 py-2 cursor-pointer"
              >
                App Updates
              </li>
              <li
                className="text-[#424242]
                lg:px-4 font-secondary text-base lg:p-0 py-2 cursor-pointer"
              >
                Media
              </li>
              <li
                className="text-[#424242]
                lg:px-4 font-secondary text-base   lg:p-0 py-2 cursor-pointer"
              >
                Press Kit
              </li>
              <li
                className="text-[#424242]
                lg:px-4 font-secondary text-base   lg:p-0 py-2 cursor-pointer"
              >
                Testimonials
              </li>
            </ul>
            <div className="order-2 lg:order-3 flex lg:hidden mx-9 my-5 items-center">
              <button className=" font-secondary text-base bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-[30px] py-3 rounded-[8px] text-white	">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-3 lg:flex hidden items-center">
          <button className=" font-secondary text-base bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-[30px] py-3 rounded-[8px] text-white	">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
