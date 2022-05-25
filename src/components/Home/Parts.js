import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
 const [services, setServices] = useState([])

 useEffect(()=>{
fetch("http://localhost:5000/services")
.then(res => res.json())
.then(data => setServices(data))
 },[])




  const handleBuy = () => {
    console.log('clicked buy btn');
  };
  return (
    <div className="grid grid-cols-1 mt-7  lg:grid-cols-3  md:grid-cols-2  gap-4">
      {services.map((service) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {service.name}
                {service.new === "yes" && (
                  <div className="badge badge-secondary">NEW</div>
                )}
              </h2>
              <p>{service.description}</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">
                  Minimum Order: {service.minimumOrder}
                </div>
                <div className="badge badge-outline">
                  Available: {service.available}
                </div>
              </div>
              <div className="card-actions justify-center">
                <div className="badge badge-outlin text-red-600">
                  Price: ${service.price} per unit
                </div>
              </div>
              <div className="mx-auto">
                <button onClick={handleBuy} className="btn gap-2 btn-primary ">
                  Buy now
                  <span className="text-2xl">
                    <AiOutlineShoppingCart />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
