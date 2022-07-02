import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
  const [orders, setOrders] = useState();
  // console.log(orders);

  let allitems = new Set()
  orders?.map(order =>allitems.add(order.itemName))
  let allitemsinarray = new Array(...allitems).join("  ").split("  ");
  

  // experiment
  useEffect(() => {
    fetch("https://gentle-oasis-35718.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const shipedHandle = (id) => {
    const status = "shiped";
    const order = { status };

    const url = `https://gentle-oasis-35718.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("make shiped sucessfull");
        window.location.reload();
      });
    console.log("shipped for ", id);
  };

  const filterorders = (status) => {
    console.log("clicked for", status);
    fetch(`https://gentle-oasis-35718.herokuapp.com/payfilter/${status}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };
  const filterOrderByItem = (item) =>{
    console.log(item);
  // add action for filter by product name. you can filter from orders or
  //  re call api for find by email and item name

  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <button
            onClick={() => {
              filterorders();
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:text-white m-5 "
          >
            All orders
          </button>
          <button
            onClick={() => {
              filterorders("paid");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            paid orders
          </button>
          <button
            onClick={() => {
              filterorders("unpaid");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            Unpaid orders
          </button>
          <button
            onClick={() => {
              filterorders("shiped");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            shiped orders
          </button>

          {/* dropdown start here  */}
          <button className="text-black  ">
            <div className="dropdown dropdown-hover h-10">
              <label
                tabIndex="0"
                className="btn m-1  btn-sm borde-0 border-pink-500  text-black hover:text-white "
              >
                orders by Item
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {allitemsinarray?.map((order,i) => (
                  <li key={i} className="border-b-2">
                    <p onClick={() => filterOrderByItem({ order })}>{order}</p>
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <button className="uppercase font-bold btn-sm disabled border rounded-md border-green-500 text-black  m-5 ">
            total {orders?.length}
          </button>
        </div>

        {/* table start here */}
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar w-[50px]">
                    <div className="w-24 rounded-xl">
                      <img alt="" src={order?.img} />
                    </div>
                  </div>
                </td>
                <td>{order?.itemName}</td>
                <td>{order?.email}</td>
                <td>{order?.quantity}</td>
                <td>{order?.status}</td>
                <td>
                  {order.status === "paid" ? (
                    <button
                      onClick={() => shipedHandle(order._id)}
                      className="btn btn-primary"
                    >
                      Ship
                    </button>
                  ) : (
                    <progress className="progress w-56"></progress>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
