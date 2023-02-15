import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
const Card = () => {
  // const [services, setServices] = useState([]);
  const navigate = useNavigate();

  //experiment
  const { data: services, isLoading } = useQuery("available", () =>
    fetch("https://menufecturer-server-git-main-wanna-be-pro.vercel.app/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  //experiment

  // useEffect(() => {
  //   fetch("https://menufecturer-server-git-main-wanna-be-pro.vercel.app/services")
  //     .then((res) => res.json())                                       // I just leave it to remember the process, nothing else
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="grid grid-cols-1 mt-7  lg:grid-cols-3  md:grid-cols-2  gap-4">
      {services?.map((service, i) => (
        <div key={i + 1} className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="h-[350px] flex items-center justify-center overflow-hidden">
            
              <img className="w-full" src={service.url} alt={service.name} />
            
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {service.name}
              {service.new === "yes" && (
                <div className="badge badge-secondary">NEW</div>
              )}
            </h2>
            <p>{service.des}</p>
            <div className="card-actions justify-center">
              <div className="badge badge-outline">
                Minimum Order: {service.minOrder}
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
              <Link to={`/service/${service._id}`}>
                <button
                  variant="dark"
                  className="text-2xl btn gap-2 btn-primary"
                >
                  Buy now
                  <span className="text-2xl">
                    <AiOutlineShoppingCart />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
