import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const Review = () => {
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <Loading />
  }
  console.log(reviews);
  console.log(loading);
  return (
    <div>
      <h1 className="text-center text-4xl text-secondary">
        this is reviewsection
      </h1>
      <div className="mx-5 px-10 ">
        <ul>
          {/* {reviews?.map((review) => (
            <li className="border-2 p-5 my-2 border-blue-200 rounded">
              <h2 className="lg:text-6xl sm:text-2xl font-bold">
                {review.name}
              </h2>
              <h2 className="lg:text-4xl sm:text-xl font-bold">
                {review.displayName}
              </h2>
              <h2 className="text-xl font-bold">{review.email}</h2>
              <h2 className="text-xl">{review.review}</h2>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Review;
