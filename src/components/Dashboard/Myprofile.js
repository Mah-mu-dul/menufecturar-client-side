import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { BsFillPencilFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Myprofile = () => {
  const [users, setUsers] = useState([]);

  const [user, loading] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [email]);
  const you = users[0];

  const editEdu = () => {
    console.log("edited ");
  };
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
        {you?.name}
      </p>
      <p className="text-2xl text-red-700 text-center">Email: {you?.email}</p>
      <div className="">
        <h1 className="text-3xl mt-5">Personal Info</h1>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl">Education</p>
            <button onClick={editEdu} className="  text-black text-2xl">
              <BsFillPencilFill />
            </button>
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

            <li>
              <div className="flex justify-center">
                <button className="border-blue-500  mt-5 border p-3 px-5 text-xl  rounded">
                  Add new Education
                </button>{" "}
              </div>
            </li>
          </ul>
        </div>
        <div className=" p-5">
          <span className="flex justify-between">
            <p className="text-2xl flex">Location</p>
            <button onClick={editEdu} className="  text-black text-2xl">
              <BsFillPencilFill />
            </button>
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

            <li>
              <div className="flex justify-center">
                <button className="border-blue-500  mt-5 border p-3 px-5 text-xl  rounded">
                  Add new Location
                </button>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
