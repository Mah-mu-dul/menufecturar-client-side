import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const Purchese = () => {
  const [item, setItem] = useState({});
  // console.log(item.minOrder);
  // console.log(quntt);
  // if (q > 200){
  //   console.log('boro')
  // }
  // else{
  //   console.log('choto');
  // }

  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  const phoneRef = useRef("");
  const QuanityRef = useRef("");
  const AdressRef = useRef("");

  useEffect(() => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  let available = item.available;
  let minOrder = item.minOrder;
  let img = item.url;

  const handlesubmit = (event) => {
    event.preventDefault();
    
    const phone = phoneRef.current.value;
    let quantity = quntt || item.minOrder 
    const adress = AdressRef.current.value;
    const itemName = item.name;
    let minOrder = item.minOrder;
    const price = item.price;


    const order = {
      name: user.displayName,
      email: user.email,
      itemName,
      minOrder,
      img,
      price,
      phone,
      status: "unpaid",
      quantity,
      adress,
    };
    console.log(order);
    // fetch("http://localhost:5000/order", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast.success("Order comfirmed");
    //     event.target.reset();
    //   });
  };
  const submit = () => {
    console.log("clicked");
  };
  // const min = item.minOrder;
  // const max = item.available;
  // let q = quntt;
  const [quntt, setQuantity] = useState(item?.minOrder);

  return (
    <div className="lg:flex sm:block justify-around">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.new === "yes" && (
              <div className="badge badge-secondary">NEW</div>
            )}
          </h2>
          <p>{item.des}</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">
              Minimum Order: {item.minOrder}
            </div>
            <div className="badge badge-outline">
              Available: {item.available}
            </div>
          </div>
          <div className="card-actions justify-center">
            <div className="badge badge-outlin text-red-600">
              Price: ${item.price} per unit
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 mx-auto mb-10 mt-8">
        <form className="" onSubmit={handlesubmit}>
          <label className="label  ">
            <span className="label-text">Name</span>
          </label>
          <input
            value={user.displayName}
            className="mx-auto input input-bordered input-primary w-full "
          />
          <label className="label  ">
            <span className="label-text">Email</span>
          </label>
          <input
            required
            value={user.email}
            className="mx-auto input input-bordered input-primary w-full "
          />
          <label className="label  ">
            <span className="label-text">Phone number</span>
          </label>
          <input
            required
            ref={phoneRef}
            name="phone"
            type="tel"
            className="mx-auto input input-bordered input-primary w-full "
          />

          <label className="label  ">
            <span className="label-text">Quanity</span>
          </label>
          <input
            required
            defaultValue={item.minOrder}
            min={item.minOrder}
            max={item.available}
            onChange={(e) => setQuantity(e.target.value)}
            // ref={QuanityRef}
            name="Quanity"
            type="number"
            className=" mx-auto input input-bordered input-primary w-full "
          />

          <label className="label  ">
            <span className="label-text">Adress</span>
          </label>
          <input
            ref={AdressRef}
            required
            name="adress"
            type="text"
            className=" mx-auto input input-bordered input-primary w-full "
          />

          <button className="btn btn-accent mx-auto mt-3 text-white w-full">
            Order
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Purchese;
