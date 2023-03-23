import { RatioButton } from "@/components/Atoms/ratioButton";
import React, { useState } from "react";

export const Subscription = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState(50);
  const sectionTitle = !isChecked ? (
    <h4 className="text-center mb-6 text-2xl">
      You pay a year in advance per Seat (Prepaid)
    </h4>
  ) : (
    <h4 className="text-center mb-6 text-2xl">
      You pay <span className="font-bold">only for seats</span> (users) who used
      KanBo in the <span className="font-bold">given month</span> at the price
      tier of the total active seats in that month (Postpay)
    </h4>
  );

  const costam = () => {
    if (!isChecked && !active) {
      return 230.0;
    } else if (isChecked && active) {
      return 28.6;
    } else if (!isChecked && active) {
      return 253.0;
    } else if (isChecked && !active) {
      return 26.0;
    }
  };

  const buttonValutToggle = () => {
    setActive(!active);
  };
  const calculatePrice = () => {
    const price = costam()! * inputValue;
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    });
  };

  return (
    <section>
      <RatioButton TextIsChecked={isChecked} textSetIsChecked={setIsChecked} />
      <aside className="bg-[#F1F0F7] p-20">
        <div className="max-w-[1100px] mx-auto">
          {sectionTitle}
          <hr className="border-1	border-[#B3B0D6] my-8" />
          <div className="flex justify-around gap-24">
            <div>
              <div>
                <h4 className="text-4xl text-[#2F424C]">
                  How many people will use KanBo?
                </h4>
                <p className="text-xl">
                  (min. 50 users, if more than 500 users choose enterprise plan)
                </p>
              </div>
              <div className="my-8">
                <input
                  defaultValue={inputValue}
                  onChange={(e) => {
                    setInputValue(parseFloat(e.target.value)); // konwersja wartości na liczbę zmiennoprzecinkową
                  }}
                  type="number"
                  className="text-center py-2 px-4 rounded-xl border"
                />
              </div>
              <ul className="list-disc	">
                <li>
                  Self Hosted on Your Own Cloud Servers (M365/Azure/GCP/AWS)
                </li>
                <li>KanBo Features dedicated for Business Plan</li>
                <li>Installed and Managed by Your IT Team</li>
                <li>Secured and protected data by Your Firewall</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-4xl">Your price:</span>
                <div className=" flex gap-5 text-xl py-2 px-4">
                  <button
                    onClick={buttonValutToggle}
                    className={!active ? "bg-white py-1 px-2" : ""}
                  >
                    EUR
                  </button>
                  <button
                    className={active ? "bg-white py-1 px-2" : ""}
                    onClick={buttonValutToggle}
                  >
                    USD
                  </button>
                </div>
              </div>
              <div className="px-10  py-6 text-center text-4xl text-white bg-[#706AB1] rounded-2xl ">
                € {costam()}user / year
              </div>
              <p className="text-center text-2xl text-[#706AB1] my-6">
                Total per year = {!active ? "€" : "$"} {calculatePrice()}
              </p>
              <div className="flex  flex-col items-center gap-10">
                <button className=" py-4 px-6 rounded-3xl text-2xl bg-[#F45A10]   text-white">
                  Quote request
                </button>
                <p className="text-center">All prices without taxes</p>
              </div>
            </div>
          </div>
          <hr className="border-1	border-[#B3B0D6] my-8	" />
          <h4 className="text-center text-2xl mt-6">
            If you are in the Education, Non-Profits, NGO sector or are
            implementing the United Nations
            <span className="font-bold">Sustainable Development Goals</span>,
            you may join our
            <span className="text-[#F45A10]">KanBo for Good</span> program.
          </h4>
        </div>
      </aside>
    </section>
  );
};
