import React from "react";

export const Header = () => {
  return (
    <div className="z-20 w-screen  h-[470px] flex justify-between lg:flex-col lg:justify-start 2xl:flex-row 2xl:justify-between ">
      <div className={`flex justify-center items-center bg h-full w-full`}>
        <h1 className="  text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-extra-bold ">
          Pricing
        </h1>
      </div>
    </div>
  );
};
