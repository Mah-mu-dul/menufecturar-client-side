import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const nameRef = useRef("");
  const urlref = useRef("");
  const reviewRef = useRef("");
  const availableRef = useRef("");
  const priceRef = useRef("");
  const minOrderRef = useRef("");
  const desRef = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    const name = nameRef.current.value;
    const url = urlref.current.value;
    const review = reviewRef.current.value;
    const available = availableRef.current.value;
    const price = priceRef.current.value;
    const minOrder = minOrderRef.current.value;
    const des = desRef.current.value;
    event.preventDefault();
  };
  return (
    <div>
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
