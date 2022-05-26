import React from "react";
import { GiAchievement, GiStairsGoal, GiAbstract037 } from "react-icons/gi";

const BusinessSummary = () => {
  const acv = <GiAchievement />;
  const gl = <GiStairsGoal />;
  const vs = <GiAbstract037 />;
  const items = [
    {
      img: acv,
      title: "Company's Background ",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: vs,
      title: "Company's  Vision ",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
    {
      img: gl,
      title: "Company's missionn",
      des: "Use rounded-none to  used to remove a border radius that was applied at a smaller breakpoint.",
    },
  ];

  return (
    <div className=" pb-20 bg-blue-100 mt-8  font-['poppins'] rounded-lg">
      <h1 className="uppercase text-5xl  font-bold text-center pt-8">
        exicutive summary
      </h1>
      <div className="block md:block sm:block border-b-2 border-[blue]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  mt-8 gap-5 ">
          {items.map((item, index) => (
            <div key={index} className="flex p-3 sm:p-5">
              <div className="lg:text-5xl sm:text-sm p-3  my-auto bg-blue-500 m-4 text-blue-200 rounded-full">
                {item.img}
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
      <h3 className="text-3xl font-bold ml-5 text-center mt-10">we have touch</h3>
      <div className="block md:block sm:block ">
        <div className=" ">
          <ul className="flex grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  mt-8 gap-5 ">
            <li className="text-center">
              <h1 className="text-5xl font-bold">1M+</h1>
              <h2 className="text-3xl">Review</h2>
            </li>
            <li className="text-center">
              <h1 className="text-5xl font-bold">250M+</h1>
              <h2 className="text-3xl"> Annual revenue</h2>
            </li>
            <li className="text-center">
              <h1 className="text-5xl font-bold">152k+</h1>
              <h2 className="text-3xl">Product</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
