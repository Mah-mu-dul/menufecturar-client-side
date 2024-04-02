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
    return <Loading />;
  }
  return (
    <div>
      <div className="mx-5 px-10 ">
        <ul>
          {reviews.length > 0 &&
            reviews.map((review, i) => (
              <li
                key={i + 1}
                className=" border-2 rounded  border-blue-50 p-10 my-5 "
              >
                <div className="lg:flex">
                  {review.url && (
                    <div className="avatar ">
                      <div className="w-24 rounded-xl">
                        <img src={review.url} />
                      </div>
                    </div>
                  )}
                  <span className="mx-20">
                    <h1 className="text-5xl text-amber-300">{review.name}</h1>
                    <h1 className="text-xl">
                      Review by : {review.displayName}
                    </h1>
                    <h1 className="text-xl "> contact to : {review.email}</h1>
                  </span>
                </div>
                <p>{review.review}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
