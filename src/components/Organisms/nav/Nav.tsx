"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/kanbo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = isScrolled
    ? "bg-white text-black fixed"
    : " text-white absolute ";

  return (
    <div
      className={` ${navClass}   z-20 w-screen top-0 left-0 flex justify-between lg:flex-col lg:justify-start 2xl:flex-row 2xl:justify-between p-6`}
    >
      <div className="flex items-end">
        <Image src={logo} alt="" />
        <p className="hidden lg:block uppercase ml-2">ahead of change</p>
      </div>
      <div className="flex gap-6 justify-end mt-4">
        <div className="">
          <div className="hidden lg:flex">
            <ul className="flex gap-5 font-medium ">
              <li>
                <a href="">Webinars</a>
              </li>
              <li>
                <a href="">Discover KanBo</a>
              </li>
              <li>
                <a href="">Solutions</a>
              </li>
              <li>
                <a href="">Business applications for departments</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Free trial</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mr-2  ">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
          <FontAwesomeIcon icon={faBars} className="w-5 h-5 lg:hidden" />
        </div>
      </div>
    </div>
  );
};
