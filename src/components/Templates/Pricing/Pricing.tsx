"use client";
import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Business } from "@/components/Organisms/possibilities/Business";
import { Enterprise } from "@/components/Organisms/possibilities/Enterprise";
import { Subscription } from "@/components/Organisms/subscription/Subscription";
import { Faq } from "@/components/Organisms/Faq/Faq";
export const Pricing = () => {
  const [textToggle, setTextToggle] = useState(false);

  const toggleHandler = () => {
    setTextToggle(!textToggle);
  };

  const activeClass = "bg-[#554F99] text-xl rounded-full p-6 text-white";
  const notActivClass = " text-xl p-6";
  return (
    <section>
      <Header />

      <div className="flex  w-[330px]  mx-auto my-20  border-2  py-2 rounded-full 	">
        <div className="flex mx-auto  gap-6  ">
          <button
            type="submit"
            onClick={toggleHandler}
            className={!textToggle ? activeClass : notActivClass}
          >
            Business
          </button>
          <button
            type="submit"
            onClick={toggleHandler}
            className={textToggle ? activeClass : notActivClass}
          >
            Enterprise
          </button>
        </div>
      </div>
      <div>
        {" "}
        {!textToggle ? (
          <h3 className="text-center mt-20 text-2xl">
            For organizations that need to scale how they collaborate and track
            work
          </h3>
        ) : (
          <h3 className="text-center mt-20 text-2xl">
            For enterprises with global scale, security, and governance needs
          </h3>
        )}
        {!textToggle ? <Business /> : <Enterprise />}
      </div>
      <div>
        <h3 className="text-2xl text-center mb-20">
          Compare Subscription Models for Enterprise Plan:
        </h3>
      </div>
      <div>
        <Subscription />
      </div>
      <Faq />
    </section>
  );
};
