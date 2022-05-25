import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyReviews = () => {
  const nameRef = useRef("");
  const urlref = useRef("");
  const reviewRef = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    const name = nameRef.current.value;
    const url = urlref.current.value;
    const review = reviewRef.current.value;
    event.preventDefault();
    console.log(name, url, review);
  };
  return (
    <div className="">
      <h2 className="text-3xl text-red-500 text-center font-bold">
        {" "}
        Add a review{" "}
      </h2>

      <form className="mx-auto w-[80%] lg:w-[50%] " onSubmit={handlesubmit}>
        <label className="label  text-black">
          <span className="label-text text-black">Item Name</span>
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
          type="text"
          className="mx-auto input input-bordered input-primary w-full "
        />

        <label className="label  ">
          <span className="label-text text-black">Your review</span>
        </label>
        <textarea className="textarea textarea-primary w-full" placeholder="" />

        <div className="">
          <div class="rating">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star  "
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star  "
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star  "
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star  "
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star  "
            />
          </div>
        </div>

        <button className="btn btn-primary mx-auto">submit</button>
      </form>
    </div>
  );
};

export default MyReviews;
