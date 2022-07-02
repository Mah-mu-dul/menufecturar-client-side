import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
  const [orders, setOrders] = useState();
  console.log(orders);

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

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          {" "}
          <button
            onClick={() => {
              filterorders();
            }}
            className="btn btn-sm text-black hover:text-white m-5 "
          >
            All orders
          </button>
          <button
            onClick={() => {
              filterorders("paid");
            }}
            className="btn btn-sm text-black hover:text-white m-5 "
          >
            paid orders
          </button>
          <button
            onClick={() => {
              filterorders("unpaid");
            }}
            className="btn btn-sm text-black hover:text-white m-5 "
          >
            Unpaid orders
          </button>
          <button
            onClick={() => {
              filterorders("shiped");
            }}
            className="btn btn-sm text-black hover:text-white m-5 "
          >
            shiped orders
          </button>
        </div>
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
