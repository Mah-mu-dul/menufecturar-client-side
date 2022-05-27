import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyReviews = () => {
  const [user, Loading] = useAuthState(auth);
  const {displayName, email}= user
  const nameRef = useRef("");
  const urlref = useRef("");
  const ratingref = useRef("");
  const reviewref = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    const name = nameRef.current.value;
    const url = urlref.current.value;
    const rating = ratingref.current.value;
    const review = reviewref.current.value;
    event.preventDefault();
    const fullReview = {
      name,
      url,
      rating,
      review,
      displayName,
      email
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullReview),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("review added");
        event.target.reset();
      });
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
        <textarea
          ref={reviewref}
          className="textarea textarea-primary w-full"
          placeholder=""
        />

        <div className="">
          <input
            ref={ratingref}
            required
            name="url"
            type="text"
            className="mx-auto input input-bordered input-primary w-full "
          />
        </div>

        <button className="btn btn-primary mx-auto">submit</button>
      </form>
    </div>
  );
};

export default MyReviews;
