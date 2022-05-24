import React from "react";
import { GiAchievement } from "react-icons/gi";

const BusinessSummary = () => {
  const acv = <GiAchievement />;
  const items = [
    {
      img: acv,
      title: "Company's Background ",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: acv,
      title: "Company's  Vision ",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: acv,
      title: "Company's mission",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: acv,
      title: "our Strength",
      des: "Use rounded-nonis most commonly used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: acv,
      title: "Company's Background 5 ",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: acv,
      title: "Company's Background 6",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
  ];

  return (
    <div className=" pb-20 bg-blue-100 mt-8  font-['poppins'] rounded-lg">
      <h1 className="uppercase text-5xl  font-bold text-center pt-8">
        exicutive summary
      </h1>
      <div className="block md:block sm:block ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  mt-8 gap-5 ">
          {items.map((item, index) => (
            <div key={index} className="flex p-3 sm:p-5">
              <div className="lg:text-5xl sm:text-sm p-3  my-auto bg-orange-600 m-4 text-blue-200 rounded-full">
                <GiAchievement />
              </div>
              <div className=" px-5">
                <h2 className="lg:text-3xl sm:text-sm font-bold text-center">
                  {item.title}
                </h2>
                <p className="text-center">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
