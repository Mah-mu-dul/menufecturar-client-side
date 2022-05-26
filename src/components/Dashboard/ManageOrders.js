import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch(`https://gentle-oasis-35718.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>status</th>
              <th>pay </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div class="avatar w-[50px]">
                    <div class="w-24 rounded-xl">
                      <img src={order.img} />
                    </div>
                  </div>
                </td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>Panding</td>
                <td>
                  <button className="btn btn-primary">pay</button>
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
