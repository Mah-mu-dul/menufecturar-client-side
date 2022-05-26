import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Portfolio = () => {
  return (
    <div>
      <div className="mx-auto flex justify-center mt-5">
        <div className="avatar flex justify-center">
          <div className="w-[50%]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
      </div>
      <p className="text-5xl text-pink-400 text-center font-bold mt-5">
        MAHMUDUL HASAN
      </p>
      <p className="text-2xl text-red-700 text-center">
        work.mahmudulhasan@gmail.com
      </p>
      <div className="p-5 lg:px-[20%]">
        <h1 className="text-3xl mt-5">Personal Info </h1>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl">Education :</p>
          </span>

          <ul className="p-4">
            <li className="flex text-xl my-4">
              <p className="text-3xl mr-2 ">
                <FaGraduationCap />
              </p>
              <p>Kulgon city corporation college</p>
            </li>
            <li className="flex text-xl">
              <p className="text-3xl mr-2">
                <FaGraduationCap />
              </p>
              <p>Independent niversity, Bangladesh </p>
            </li>
          </ul>
        </div>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl flex">Location :</p>
          </span>
          <ul className="p-4">
            <li className="flex text-xl my-4">
              <p className="text-3xl mr-2">
                <GrLocation />
              </p>
              <p>Dakbangla tabalchari, Matiranga, khagrachari</p>
            </li>
            <li className="flex text-xl">
              <p className="text-3xl mr-2">
                <GrLocation />
              </p>
              <p>Basundhara R/A, Dhaka, 1216</p>
            </li>
          </ul>
        </div>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl flex">skills :</p>
          </span>
          <ul className="p-4 flex justify-evenly">
            <div className="">
              <ul>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold ">HTML</span> (Expert level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> CSS </span> (Expert level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> Java Script </span> (Expert
                    level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> MongoDB</span> (Beginning
                    level)
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> CSS </span> (Expert level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> React </span> (Intermediate
                    level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> Python </span> (Intermediate
                    level)
                  </p>
                </li>
                <li className="flex text-xl my-2">
                  <p className="text-3xl mr-2"></p>
                  <p>
                    <span className="font-bold "> C++ </span> (Intermediate
                    level)
                  </p>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl flex">
              Some sites link that I developed last 4 months :
            </p>
          </span>
          <ul className="p-4 ">
            <li className="text-2xl">
              <a href="https://warehouse-of-books.web.app/">1. BOOKrio</a>
            </li>
            <li className="text-2xl">
              <a href=" https://on-the-way-f4693.web.app/">2. On the way</a>
            </li>
            <li className="text-2xl">
              <a href=" https://best-bike-r15m-by-mahmudul.netlify.app/">
                3. Best Bike
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
