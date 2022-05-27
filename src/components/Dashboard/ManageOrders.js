import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageOrders = () => {
  const [orders, setOrders] = useState();

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

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>status</th>
              <th>pay </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar w-[50px]">
                    <div className="w-24 rounded-xl">
                      <img src={order?.img} />
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
                    <></>
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
