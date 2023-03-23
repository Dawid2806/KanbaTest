import React, { useState } from "react";
interface ratioButtonProps {
  textSetIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  TextIsChecked: boolean;
}
export const RatioButton = ({
  TextIsChecked,
  textSetIsChecked,
}: ratioButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    textSetIsChecked(!TextIsChecked);
  };
  const activeClass = "bg-[#F1F0F7] rounded-tr-3xl rounded-tl-3xl";
  return (
    <div className="flex justify-center gap-10">
      <div
        className={`flex items-center gap-2  p-6  ${
          !isChecked ? activeClass : ""
        }`}
      >
        <input
          className="w-6 h-6"
          type="radio"
          name="yearly"
          onChange={checkHandler}
          checked={!isChecked}
        />
        <label className="text-2xl" htmlFor="yearly">
          Yearly subscriptions
        </label>
      </div>
      <div
        className={`flex items-center gap-2  p-6 ${
          isChecked ? activeClass : ""
        }`}
      >
        <input
          className="w-6 h-6"
          type="radio"
          name="active"
          onChange={checkHandler}
          checked={isChecked}
          placeholder="eeeeeelo"
        />
        <label htmlFor="active " className="text-2xl">
          Active seat
        </label>
      </div>
    </div>
  );
};
