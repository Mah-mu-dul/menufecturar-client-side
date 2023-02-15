import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddItems = () => {
  const nameRef = useRef("");
  const urlref = useRef("");
  const availableRef = useRef("");
  const priceRef = useRef("");
  const minOrderRef = useRef("");
  const desRef = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    const name = nameRef.current.value;
    const url = urlref.current.value;
    const available = availableRef.current.value;
    const price = priceRef.current.value;
    const minOrder = minOrderRef.current.value;
    const des = desRef.current.value;
    event.preventDefault();

    const s = {
      name: name,
      url: url,
      available: available,
      price: price,
      minOrder: minOrder,
      des: des,
    };

    console.log(s);

    fetch("https://menufecturer-server-git-main-wanna-be-pro.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(s),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Item added sucessfully ");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center text-blue-700 font-bold">
        Add an Item
      </h2>
      <form className="mx-auto w-[80%] lg:w-[50%] " onSubmit={handlesubmit}>
        <label className="label  text-black">
          <span className="label-text text-black">Product Name</span>
        </label>
        <input
          ref={nameRef}
          required
          name="name"
          type="text"
          className="mx-auto input input-bordered input-primary w-full "
        />
        <label className="label  ">
          <span className="label-text text-black">Image URL</span>
        </label>
        <input
          ref={urlref}
          required
          name="url"
          type="url"
          className="mx-auto input input-bordered input-primary w-full "
        />

        <div className="flex justify-around">
          <span>
            <label className="label  ">
              <span className="label-text text-black">Minimum oder</span>
            </label>
            <input
              ref={minOrderRef}
              required
              name="minorder"
              type="number"
              className="mx-auto input input-bordered input-primary w-full "
            />
          </span>
          <span>
            <label className="label  ">
              <span className="label-text text-black">Available Units</span>
            </label>
            <input
              ref={availableRef}
              required
              name="available"
              type="number"
              className="mx-auto input input-bordered input-primary w-full "
            />
          </span>
        </div>
        <div className="w-1/2 mx-auto">
          <label className="label  ">
            <span className="label-text text-black">Price per unit</span>
          </label>
          <input
            ref={priceRef}
            required
            name="price"
            type="number"
            className="mx-auto input input-bordered input-primary w-full "
          />
        </div>

        <label className="label  ">
          <span className="label-text text-black">description</span>
        </label>
        <textarea
          required
          ref={desRef}
          name="des"
          className="textarea textarea-primary w-full"
          placeholder=""
        />

        <button className="btn btn-primary mx-auto">submit</button>
      </form>{" "}
    </div>
  );
};

export default AddItems;
