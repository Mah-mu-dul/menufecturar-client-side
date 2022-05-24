import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Card = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Arduino UNO
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            If a dog chews shoes whose shoes does he choose? shoes whose shoes
            does he choose?
          </p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">Minimum Order: 100</div>
            <div className="badge badge-outline">Available: 10,000</div>
          </div>
          <div className="card-actions justify-center">
            <div className="badge badge-outlin text-red-600">Price: $5 per unit</div>
          </div>
          <div className="mx-auto">
            <button class="btn gap-2 btn-primary ">
              Buy now
              <span className="text-2xl">
                <AiOutlineShoppingCart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
